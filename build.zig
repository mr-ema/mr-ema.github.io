const std = @import("std");
const zine = @import("zine");

pub fn build(b: *std.Build) !void {
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

        .static_assets = &.{
            // "CNAME",

            // Fonts referenced in CSS files
            "fonts/JetBrainsMono-VariableFont_wght.ttf",
            "fonts/FascinateInline-Regular.ttf",

            // Javascript
            "js/lib/onepage-js/dist/onepage.js",

            // Others
            "games/cnake/index.wasm",
            "games/cnake/index.data",
            "games/cnake/index.html",
            "games/cnake/index.js",
        },
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
