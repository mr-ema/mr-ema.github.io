<script>
        import projects from "../data/projects.json";
</script>

{#each projects as project}
        <div class="container">
                <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                </div>

                <div class="links">
                        <a href={project.url} target="_blank" class="btn-link">See Live</a>
                        <a href={project.source_code} target="_blank">Source Code</a>
                </div>
        </div>
{/each}

<style>
        div.container {
                border: 0;
                border-radius:  0 0.45rem 0.45rem 0;
                border-left: 0.2rem solid var(--fg-3);
                background: var(--bg-2);
                gap: 2rem;
                display: flex;
                flex-direction: column;
                padding: 1.5rem;
                width: 80%;
        }

        .links {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                gap: 1rem;
                align-content: center;
                width: 100%;
        }

        a.btn-link {
                border: 0.13rem solid var(--fg-3);
                border-radius: 0.15rem;
        }

        a {
                text-decoration: none;
                color: var(--fg-3);
                font-weight: bold;
                padding: 0.4rem 1rem;
        }

        a:hover {
                opacity: 0.6;
                transition: opacity 0.3s ease;
        }

</style>
