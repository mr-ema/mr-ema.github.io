<script>
        import Project from "./lib/Project.svelte";
        import banner from "./assets/banner.svg";
        import Icon from "@iconify/svelte";
</script>

<main>
        <section id="banner">
                <img class="banner" src={banner} alt="A banner with the text 'MR-EMA' in a retro game like style" />

                <a href="#my-projects" class="scroll-btn">
                        <span class="icon-container">
                                <Icon icon="icon-park-outline:down-c" />
                        </span>
                </a>
        </section>

        <section id="my-projects">
                <h1>My Projects</h1>
                <Project />

                <a href="#about-me" class="scroll-btn">
                        <span class="icon-container">
                                <Icon icon="icon-park-outline:down-c" />
                        </span>
                </a>
        </section>

        <section id="about-me">
                <h1>About Me</h1>
                <p> Hi, I'm Emanuel, a programming analysis student. I enjoy food, learning, and coding.</p>

                <a href="#links" class="scroll-btn">
                        <span class="icon-container">
                                <Icon icon="icon-park-outline:down-c" />
                        </span>
                </a>
        </section>

        <section id="links">
                <h1>Links</h1>

                <div class="links-container">
                        <a href="https://github.com/mr-ema" target="_blank" title="Visit My Github Profile">
                                <span class="icon-text-container">
                                        <Icon icon="ri:github-fill" />
                                        <span>Github</span>
                                </span>
                        </a>

                        <a href="mailto:ema.a.v.c2017@gmail.com" target="_blank" title="Send Me An Email">
                                <span class="icon-text-container">
                                        <Icon icon="bxl:gmail" />
                                        <span>Email</span>
                                </span>
                        </a>
                </div>

                <a href="#banner" class="scroll-btn" title="Go Back To The Start">
                        <span class="icon-container">
                                <Icon icon="icon-park-outline:up-c" />
                        </span>
                </a>
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

        a { text-decoration: none; }

        div.links-container {
                border-bottom: 0.13rem solid var(--fg-3);
                padding: 1rem; 
                display: flex;
                align-items: center;
                gap: 1.5rem;
                height: auto;
        }

        section {
                display: flex;
                gap: 2rem;
                position: relative;
                font-family: 'JetBrains Mono', monospace;
                font-weight: bold;
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
