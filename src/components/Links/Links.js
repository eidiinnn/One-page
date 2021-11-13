import { Wrapper, Container, Heading, Link } from "./Links.style.js";

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/uni</Heading>
                <Link href="https://www.notion.so/">
                    notion
                </Link>
                <Link href="https://calendar.google.com">calendar</Link>
                <Link href="https://gmail.com">gmail</Link>
                <Link href="https://outlook.live.com/mail/0/inbox">outlook</Link>
                <Link href="https://www.artstation.com/">
                    artstation
                </Link>
            </Container>

            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link href="https://github.com/">github</Link>
                <Link href="https://hub.docker.com/?ref=login">docker-hub</Link>
                <Link href="https://stackoverflow.com/">stackoverflow</Link>
                <Link href="https://www.youtube.com/watch?v=zEo6nadPu1U&list=PLdR7m7PFLzQ7RqOVfxk2Fr2F-a7iWzovn">nier-automata-ost</Link>
                <Link href="https://www.figma.com">figma</Link>
            </Container>

            <Container>
                <Heading color="green">~/fun</Heading>
                <Link href="https://www.youtube.com">youtube</Link>
                <Link href="https://podcasts.google.com/">google-podcasts</Link>
                <Link href="https://discord.com/app">discord</Link>
                <Link href="https://www.netflix.com/browse">netflix</Link>
                <Link href="https://www.reddit.com/">reddit</Link>
            </Container>
        </Wrapper>
    );
};

export default Links;
