"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ContainerWrapper } from "@/components/container-wrapper";
import { useLanguage } from "@/contexts/language-context";
import { getProjects, type Project } from "@/lib/api.service";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { NotifyWhenLiveModal } from "@/components/notify-when-live-modal";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from mock API
    getProjects().then(setProjects);
  }, []);
  return (
    <main className="min-h-screen">
      <ContainerWrapper as="section" className="py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              {t.projectsPage.title}
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {t.projectsPage.subtitle}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const projectInfo = t.projectsPage.projects[index];
              return (
                <Card
                  key={project.id}
                  className="group relative flex flex-col overflow-hidden border-border/50 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Countdown Timer Badge - Top Left Corner */}
                  {project.isNew && project.discountEndDate && (
                    <div className="absolute left-4 top-4 z-10">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help">
                            <CountdownTimer
                              targetDate={project.discountEndDate}
                              compact
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="max-w-xs">
                          {t.projectsPage.lifetimeOfferTooltip}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  )}

                  {/* Status Badges - Top Right Corner */}
                  {project.comingSoon ? (
                    <Badge
                      variant="default"
                      className="absolute right-4 top-4 z-10 bg-gradient-to-r from-purple-500 to-violet-500 text-xs font-semibold text-white shadow-lg"
                    >
                      {t.projectsPage.badges.comingSoon}
                    </Badge>
                  ) : project.isNew ? (
                    <Badge
                      variant="default"
                      className="absolute right-4 top-4 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-xs font-semibold text-white shadow-lg"
                    >
                      {t.projectsPage.badges.new}
                    </Badge>
                  ) : (
                    <Badge
                      variant="default"
                      className="absolute right-4 top-4 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-xs font-semibold text-white shadow-lg"
                    >
                      {project.discount}
                      {t.projectsPage.badges.discount}
                    </Badge>
                  )}

                  <CardHeader className="flex items-center justify-center pt-10">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${projectInfo?.name || "Project"} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 text-center space-y-3">
                    <CardTitle className="text-balance text-xl">
                      {projectInfo?.name}
                    </CardTitle>
                    <CardDescription className="text-pretty text-sm">
                      {projectInfo?.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter>
                    {project.comingSoon && !project.link ? (
                      <NotifyWhenLiveModal
                        projectName={projectInfo?.name || "Project"}
                      />
                    ) : (
                      <Button
                        className="w-full cursor-pointer"
                        size="lg"
                        onClick={() => {
                          if (project.link && project.link !== "#") {
                            window.open(
                              project.link,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                      >
                        {project.comingSoon && project.link
                          ? t.projectsPage.buttons.checkUpdates
                          : t.projectsPage.buttons.tryIt}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </ContainerWrapper>
    </main>
  );
}
