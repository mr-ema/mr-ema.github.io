const std = @import("std");
const zine = @import("zine");

pub fn build(b: *std.Build) !void {
    var static_assets_list = std.ArrayList([]const u8).init(b.allocator);

    _ = try static_assets_list.appendSlice(&[_][]const u8{
        // "CNAME",

        // Fonts referenced in CSS files
        "fonts/JetBrainsMono-VariableFont_wght.ttf",
        "fonts/FascinateInline-Regular.ttf",

        // Javascript
        "js/lib/onepage-js/dist/onepage.js",
    });

    _ = try static_assets_list.appendSlice(try includeFileList("assets/games", b, .{
        .prefix = "games",
        .allowed_exts = &[_][]const u8{"*"},
    }));

    _ = try static_assets_list.appendSlice(try includeFileList("assets/js/lib/onepage-js/examples", b, .{
        .prefix = "js/lib/onepage-js/examples",
        .allowed_exts = &[_][]const u8{".html"},
    }));

    zine.multilingualWebsite(b, .{
        .host_url = "https://mr-ema.github.io",
        .layouts_dir_path = "layouts",
        .assets_dir_path = "assets",
        .i18n_dir_path = "i18n",
        .locales = &.{
            .{
                .code = "en",
                .name = "English",
                .output_prefix_override = "",
                .site_title = "Mr Ema - Developer",
                .content_dir_path = "content/en",
            },

            .{
                .code = "es",
                .name = "Spanish",
                .site_title = "Mr Ema - Programador",
                .content_dir_path = "content/es",
            },
        },

        .static_assets = static_assets_list.items,
        .build_assets = &.{
            .{
                .name = "zon",
                .lp = b.path("build.zig.zon"),
            },
            .{
                .name = "frontmatter",
                .lp = b.dependency("zine", .{}).path(
                    "frontmatter.ziggy-schema",
                ),
            },
        },
        .debug = true,
    });

    // This line creates a build step that generates an updated
    // Scripty reference file. Other sites will not need this
    // most probably, but at least it's an example of how Zine
    // can integrate neatly with other Zig build steps.
    //zine.scriptyReferenceDocs(
    //    b,
    //    "content/docs/superhtml/scripty.smd",
    //    "content/docs/supermd/scripty.smd",
    //);
}

pub fn includeFileList(
    directory: []const u8,
    b: *std.Build,
    options: struct { prefix: []const u8 = "", allowed_exts: []const []const u8 },
) ![][]const u8 {
    const dir = try std.fs.cwd().openDir(directory, .{ .iterate = true });
    var sources = std.ArrayList([]const u8).init(b.allocator);

    var walker = try dir.walk(b.allocator);
    defer walker.deinit();

    while (try walker.next()) |entry| {
        const ext = std.fs.path.extension(entry.basename);
        const include_file = for (options.allowed_exts) |e| {
            if (std.mem.eql(u8, e, "*") or std.mem.eql(u8, ext, e))
                break true;
        } else false;

        if (include_file and entry.kind == .file) {
            const path = try std.fs.path.join(
                b.allocator,
                &[_][]const u8{ options.prefix, b.dupe(entry.path) },
            );
            try sources.append(path);
        }
    }

    return sources.toOwnedSlice();
}
