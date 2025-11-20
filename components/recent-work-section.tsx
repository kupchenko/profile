"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContainerWrapper } from "./container-wrapper"
import { ProjectCard } from "./project-card"
import { ArticleCard } from "./article-card"
import { useLanguage } from "@/contexts/language-context";

export function RecentWorkSection() {
  const { t } = useLanguage();

  return (
    <ContainerWrapper as="section" className="py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.recentWork.featuredProjects}</h2>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/projects">
                {t.recentWork.viewAll} →
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            {t.recentWork.projects.map((project, index) => (
              <ProjectCard
                key={index}
                id={index.toString()}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.recentWork.recentArticles}</h2>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/blog">
                {t.recentWork.viewAll} →
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            {t.recentWork.articles.map((article, index) => (
              <ArticleCard
                key={index}
                id={index.toString()}
                title={article.title}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/blog">{t.recentWork.exploreArticles}</Link>
          </Button>
        </div>
      </div>
    </ContainerWrapper>
  )
}
