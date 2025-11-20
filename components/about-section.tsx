export function AboutSection() {
  return (
    <section className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
          <p>
            Currently, I&apos;m a Senior Software Engineer at{" "}
            <span className="font-medium text-foreground">TechCorp</span>, specializing in full-stack development. I
            contribute to the creation and maintenance of critical systems that power our platform, ensuring they meet
            web standards and best practices to deliver an exceptional user experience.
          </p>
          <p>
            In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from{" "}
            <span className="font-medium text-foreground">advertising agencies</span> and{" "}
            <span className="font-medium text-foreground">large corporations</span> to{" "}
            <span className="font-medium text-foreground">start-ups</span> and{" "}
            <span className="font-medium text-foreground">small digital product studios</span>. Additionally, I released
            a <span className="font-medium text-foreground">comprehensive video course</span> a few years ago, guiding
            learners through building a web app from scratch.
          </p>
          <p>
            In my spare time, I&apos;m usually working on side projects, reading technical blogs, or mentoring aspiring
            developers through various online communities.
          </p>
        </div>
      </div>
    </section>
  )
}
