"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Phone, Instagram, Twitter, Facebook, ChevronUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

const Bottombar = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full border-t border-gray-300 bg-background py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">OU Insight Hub</h3>
            <p className="text-sm text-muted-foreground">
              We provide high-quality services and products to our customers worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <div>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </div>
              <div>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </div>
              <div>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </div>
              <div>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2 text-sm">
              <div>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                      More <ChevronUp className="h-3 w-3 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/faq">FAQ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/sitemap">Sitemap</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/accessibility">Accessibility</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} OU Insight Hub. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed and developed with DevAnonitos ❤️</p>
        </div>
      </div>
    </div>
  )
}

export default Bottombar;

