import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Component, Layers, Palette, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold text-xl">Storybook UI</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="https://storybook.js.org/docs"
                target="_blank"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Documentation
              </Link>
              <Link
                href="/storybook"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Button>Open Storybook</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to Storybook UI</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build, test, and organize your UI components in isolation with Storybook
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/storybook">
                  <Button className="gap-1">
                    <Play className="h-4 w-4" />
                    Launch Storybook
                  </Button>
                </Link>
                <Link href="#components">
                  <Button variant="outline" className="gap-1">
                    <Component className="h-4 w-4" />
                    View Components
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Storybook?</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Build components in isolation</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Storybook provides a sandbox to build UI components in isolation so you can develop hard-to-reach
                  states and edge cases.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[400px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                  <div className="flex h-full flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 text-xs text-muted-foreground">Storybook Preview</div>
                    </div>
                    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed p-4">
                      <div className="text-center">
                        <Component className="mx-auto h-10 w-10 text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">Component Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="components" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Component Library</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our collection of reusable UI components
                </p>
              </div>
            </div>

            <Tabs defaultValue="buttons" className="mt-12 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="buttons" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span>Buttons</span>
                </TabsTrigger>
                <TabsTrigger value="cards" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span>Cards</span>
                </TabsTrigger>
                <TabsTrigger value="forms" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Forms</span>
                </TabsTrigger>
                <TabsTrigger value="navigation" className="flex items-center gap-2">
                  <Component className="h-4 w-4" />
                  <span>Navigation</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="buttons" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Component</CardTitle>
                    <CardDescription>Interactive button with multiple variants</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-4">
                      <Button>Default Button</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="rounded-md bg-slate-950 p-4">
                      <pre className="text-sm text-slate-50 overflow-x-auto">
                        <code>{`<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}</code>
                      </pre>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/storybook?path=/story/button--primary">
                      <Button variant="outline" size="sm">
                        View in Storybook
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="cards" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Component</CardTitle>
                    <CardDescription>Versatile container for content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Simple Card</CardTitle>
                          <CardDescription>Basic card example</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Cards can contain various types of content including text, images, and actions.</p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm">Action</Button>
                        </CardFooter>
                      </Card>

                      <Card className="bg-muted">
                        <CardHeader>
                          <CardTitle>Muted Card</CardTitle>
                          <CardDescription>With background styling</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Cards can have different background styles to create visual hierarchy.</p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm" variant="secondary">
                            Action
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>

                    <div className="rounded-md bg-slate-950 p-4">
                      <pre className="text-sm text-slate-50 overflow-x-auto">
                        <code>{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}</code>
                      </pre>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/storybook?path=/story/card--primary">
                      <Button variant="outline" size="sm">
                        View in Storybook
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="forms" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Components</CardTitle>
                    <CardDescription>Input elements for user interaction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Type your message here"
                      />
                    </div>

                    <div className="rounded-md bg-slate-950 p-4">
                      <pre className="text-sm text-slate-50 overflow-x-auto">
                        <code>{`<div className="space-y-2">
  <label htmlFor="name" className="text-sm font-medium">Name</label>
  <input
    id="name"
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Enter your name"
  />
</div>`}</code>
                      </pre>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/storybook?path=/story/form--primary">
                      <Button variant="outline" size="sm">
                        View in Storybook
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="navigation" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Navigation Components</CardTitle>
                    <CardDescription>Elements for user navigation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border p-4">
                      <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          <span className="font-medium">Brand</span>
                        </div>
                        <div className="hidden md:flex items-center gap-6">
                          <Link href="#" className="text-sm font-medium">
                            Home
                          </Link>
                          <Link href="#" className="text-sm font-medium">
                            Features
                          </Link>
                          <Link href="#" className="text-sm font-medium">
                            Pricing
                          </Link>
                          <Link href="#" className="text-sm font-medium">
                            About
                          </Link>
                        </div>
                        <Button size="sm">Sign In</Button>
                      </nav>
                    </div>

                    <div className="rounded-md bg-slate-950 p-4">
                      <pre className="text-sm text-slate-50 overflow-x-auto">
                        <code>{`<nav className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <BookOpen className="h-5 w-5" />
    <span className="font-medium">Brand</span>
  </div>
  <div className="hidden md:flex items-center gap-6">
    <Link href="#" className="text-sm font-medium">Home</Link>
    <Link href="#" className="text-sm font-medium">Features</Link>
    <Link href="#" className="text-sm font-medium">Pricing</Link>
    <Link href="#" className="text-sm font-medium">About</Link>
  </div>
  <Button size="sm">Sign In</Button>
</nav>`}</code>
                      </pre>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/storybook?path=/story/navigation--primary">
                      <Button variant="outline" size="sm">
                        View in Storybook
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Getting Started</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start building with Storybook</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Storybook is a frontend workshop for building UI components and pages in isolation. It makes
                  development faster and easier by isolating components.
                </p>
                <Link href="https://storybook.js.org/docs/get-started/install" target="_blank">
                  <Button>Installation Guide</Button>
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Development</div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Run Storybook locally with a simple command. The development server includes hot reloading, so your
                  changes appear instantly. Perfect for iterative component development. [^2]
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://storybook.js.org/docs/react/get-started/install" target="_blank">
                      Setup Guide
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="https://storybook.js.org/docs/react/api/cli-options" target="_blank">
                      CLI Options
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Storybook UI. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="https://storybook.js.org"
              target="_blank"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Official Website
            </Link>
            <Link
              href="https://storybook.js.org/docs"
              target="_blank"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/storybookjs/storybook"
              target="_blank"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
