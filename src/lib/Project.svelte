<script>
        import projects from "/src/data/projects.json";
</script>

{#each projects as project}
        <div class="container">
                <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                </div>
                <a href={project.url} target="_blank">Live preview</a>
        </div>
{/each}

<style>
        div.container {
                border: 2px solid var(--bg-2);
                border-radius: 0.3rem;
                gap: 1rem;
                display: flex;
                flex-direction: column;
                padding: 2rem 1.5rem;
                width: 80%;
        }

        a {
                align-self: flex-end;
                text-decoration: none;
        }
</style>
