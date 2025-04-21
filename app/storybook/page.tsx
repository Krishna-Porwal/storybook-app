"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Code, Component, Eye, Layers, Menu, Palette, Play, Settings } from "lucide-react"
import Link from "next/link"

export default function StorybookPage() {
  const [activeComponent, setActiveComponent] = useState("button")
  const [activeStory, setActiveStory] = useState("primary")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [knobs, setKnobs] = useState({
    variant: "default",
    size: "default",
    disabled: false,
    text: "Button",
  })

  // Parse URL params on client-side
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const path = searchParams.get("path")
    if (path) {
      const [, component, story] = path.split("/")
      if (component) setActiveComponent(component.toLowerCase())
      if (story) setActiveStory(story.toLowerCase())
    }
  }, [])

  const handleKnobChange = (key, value) => {
    setKnobs((prev) => ({ ...prev, [key]: value }))
  }

  const renderPreview = () => {
    switch (activeComponent) {
      case "button":
        return (
          <div className="flex items-center justify-center p-10">
            <Button variant={knobs.variant} size={knobs.size} disabled={knobs.disabled}>
              {knobs.text}
            </Button>
          </div>
        )
      case "card":
        return (
          <div className="flex items-center justify-center p-10">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>{knobs.text || "Card Title"}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here. This is a simple card component example.</p>
              </CardContent>
              <CardFooter>
                <Button variant={knobs.variant} size={knobs.size} disabled={knobs.disabled}>
                  Action
                </Button>
              </CardFooter>
            </Card>
          </div>
        )
      case "form":
        return (
          <div className="flex items-center justify-center p-10">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Form Example</CardTitle>
                <CardDescription>A simple form component</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={knobs.variant} size={knobs.size} disabled={knobs.disabled}>
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center p-10">
            <p className="text-muted-foreground">Select a component to preview</p>
          </div>
        )
    }
  }

  const renderKnobs = () => {
    switch (activeComponent) {
      case "button":
      case "card":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="variant">Variant</Label>
              <Select value={knobs.variant} onValueChange={(value) => handleKnobChange("variant", value)}>
                <SelectTrigger id="variant">
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="destructive">Destructive</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Select value={knobs.size} onValueChange={(value) => handleKnobChange("size", value)}>
                <SelectTrigger id="size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="text">Text</Label>
              <Input
                id="text"
                value={knobs.text}
                onChange={(e) => handleKnobChange("text", e.target.value)}
                placeholder="Button text"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="disabled"
                checked={knobs.disabled}
                onCheckedChange={(checked) => handleKnobChange("disabled", checked)}
              />
              <Label htmlFor="disabled">Disabled</Label>
            </div>
          </div>
        )
      default:
        return <div className="p-4 text-center text-muted-foreground">No controls available for this component</div>
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Button variant="outline" size="icon" className="sm:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Code className="mr-2 h-4 w-4" />
            Show Code
          </Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <aside className={`${sidebarOpen ? "block" : "hidden"} border-r bg-muted/40 md:block`}>
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-auto lg:py-4">
              <Link href="/storybook" className="flex items-center gap-2 font-semibold">
                <Component className="h-5 w-5" />
                <span>Storybook</span>
              </Link>
            </div>
            <nav className="grid items-start px-2 text-sm font-medium">
              <div className="px-2 py-2">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Components</h2>
                <div className="space-y-1">
                  <Button
                    variant={activeComponent === "button" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveComponent("button")
                      setActiveStory("primary")
                    }}
                  >
                    <Palette className="mr-2 h-4 w-4" />
                    Button
                  </Button>
                  <Button
                    variant={activeComponent === "card" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveComponent("card")
                      setActiveStory("primary")
                    }}
                  >
                    <Layers className="mr-2 h-4 w-4" />
                    Card
                  </Button>
                  <Button
                    variant={activeComponent === "form" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveComponent("form")
                      setActiveStory("primary")
                    }}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Form
                  </Button>
                </div>
              </div>
              <div className="px-2 py-2">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Stories</h2>
                <div className="space-y-1">
                  {activeComponent === "button" && (
                    <>
                      <Button
                        variant={activeStory === "primary" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveStory("primary")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Primary
                      </Button>
                      <Button
                        variant={activeStory === "secondary" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setActiveStory("secondary")
                          handleKnobChange("variant", "secondary")
                        }}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Secondary
                      </Button>
                      <Button
                        variant={activeStory === "destructive" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setActiveStory("destructive")
                          handleKnobChange("variant", "destructive")
                        }}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Destructive
                      </Button>
                    </>
                  )}
                  {activeComponent === "card" && (
                    <>
                      <Button
                        variant={activeStory === "primary" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveStory("primary")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Default
                      </Button>
                      <Button
                        variant={activeStory === "with-form" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveStory("with-form")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        With Form
                      </Button>
                    </>
                  )}
                  {activeComponent === "form" && (
                    <>
                      <Button
                        variant={activeStory === "primary" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveStory("primary")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Login Form
                      </Button>
                      <Button
                        variant={activeStory === "signup" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveStory("signup")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Signup Form
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </aside>
        <main className="flex flex-1 flex-col">
          <div className="flex-1 grid grid-rows-[auto_1fr]">
            <div className="border-b">
              <Tabs defaultValue="canvas" className="h-14">
                <div className="container h-full py-2">
                  <TabsList className="grid h-full w-full max-w-[400px] grid-cols-3">
                    <TabsTrigger value="canvas" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>Canvas</span>
                    </TabsTrigger>
                    <TabsTrigger value="docs" className="flex items-center gap-2">
                      <Component className="h-4 w-4" />
                      <span>Docs</span>
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </Tabs>
            </div>
            <div className="grid md:grid-cols-[1fr_350px]">
              <div className="flex flex-col">
                <div className="flex h-10 items-center justify-between border-b bg-muted/50 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1)} /{" "}
                      {activeStory.charAt(0).toUpperCase() + activeStory.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Settings</span>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 overflow-auto p-4">{renderPreview()}</div>
              </div>
              <div className="border-l">
                <div className="flex h-10 items-center border-b bg-muted/50 px-4">
                  <h3 className="text-sm font-medium">Controls</h3>
                </div>
                <div className="p-4">{renderKnobs()}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
