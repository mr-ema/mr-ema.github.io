<script>
        import Project from "./lib/Project.svelte";
        import banner from "./assets/banner.svg";
        import Icon from "@iconify/svelte";
</script>

<main>
        <section id="banner">
                <img class="banner" src={banner} alt="Banner" />

                <a href="#my-projects" class="scroll-btn">
                        <span class="icon-container">
                                <Icon icon="icon-park-solid:down-c" />
                        </span>
                </a>
        </section>

        <section id="my-projects">
                <h1>My Projects</h1>
                <Project />

                <a href="#about-me" class="scroll-btn">
                        <span class="icon-container">
                                <Icon icon="icon-park-solid:down-c" />
                        </span>
                </a>
        </section>

        <section id="about-me">
                <h1>About Me</h1>
                <p>
                        My name is Emanuel, and I'm a student studying Programming Analysis. <br/>
                        I have a strong passion for coding and continually expanding my knowledge by learning new things.
                </p>
        </section>
</main>

<style>
        .banner {
                height: auto;
                width: 60%;
        }

        p {
                text-align: center;
                max-width: 80%;
        }

        section {
                font-family: 'JetBrains Mono', monospace;
                display: flex;
                gap: 2rem;
                position: relative;
                align-items: center; 
                justify-content: center;
                flex-direction: column;
                min-height: 100vh;
        }

        h1 {
                font-size: 3.5rem;
                font-family: 'Fascinate Inline', cursive;
                margin-bottom: 2rem;
        }

        .scroll-btn {
                margin-top: 3rem;
        }

        @media (max-width: 767px) {
                .banner {
                        width: 100%;
                }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
                .banner {
                        width: 80%;
                }
        }
</style>
