import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search, Heart, User, ChevronLeft, ChevronRight, Star, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold">
              متجري
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                الرئيسية
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                التصنيفات
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                العروض
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                الأكثر مبيعاً
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                تواصل معنا
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="ابحث عن منتجات..." className="w-[200px] pr-9" />
            </div>
            <Link href="#" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              <User className="h-5 w-5" />
              <span>حسابي</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              <Heart className="h-5 w-5" />
              <span>المفضلة</span>
            </Link>
            <Link href="#" className="relative flex items-center gap-1 text-sm font-medium hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              <span>السلة</span>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Link>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">عربة التسوق</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container py-8 md:py-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  تسوق بثقة مع أفضل المنتجات والعروض
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  اكتشف تشكيلة واسعة من المنتجات عالية الجودة بأسعار تنافسية وتوصيل سريع لجميع أنحاء البلاد
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="font-medium">
                    تسوق الآن
                  </Button>
                  <Button variant="outline" size="lg" className="font-medium">
                    العروض الخاصة
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/banner-right-image.png"
                  alt="صورة العرض الرئيسي"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-muted py-8 md:py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">تسوق حسب الفئات</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">السابق</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">التالي</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["الإلكترونيات", "الملابس", "الأحذية", "الجمال والعناية", "المنزل والمطبخ", "الرياضة"].map(
                (category, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="group flex flex-col items-center gap-2 rounded-lg bg-background p-4 transition-colors hover:bg-accent"
                  >
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${index + 1}`}
                        alt={category}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <span className="text-sm font-medium">{category}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">منتجات مميزة</h2>
              <Link href="#" className="text-sm font-medium text-primary hover:underline">
                عرض الكل
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((product) => (
                <div
                  key={product}
                  className="group relative rounded-lg border bg-background p-3 transition-colors hover:border-primary"
                >
                  <div className="absolute left-3 top-3 z-10 flex gap-1">
                    <span className="inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      جديد
                    </span>
                    {product === 2 && (
                      <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                        خصم 15%
                      </span>
                    )}
                  </div>
                  <Link href="#" className="absolute left-3 top-3 z-20">
                    <Heart className="h-5 w-5 text-muted-foreground transition-colors hover:text-red-500" />
                    <span className="sr-only">إضافة للمفضلة</span>
                  </Link>
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-md">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=منتج ${product}`}
                      alt={`منتج ${product}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">منتج مميز {product}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                            />
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground">(120)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-x-1 space-x-reverse">
                        <span className="font-medium">199 د.أ</span>
                        {product === 2 && <span className="text-sm text-muted-foreground line-through">235 د.أ</span>}
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">إضافة للسلة</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="relative overflow-hidden rounded-lg bg-primary">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h2 className="mb-2 text-2xl font-bold text-primary-foreground md:text-3xl">
                    خصومات حصرية تصل إلى 50%
                  </h2>
                  <p className="mb-4 max-w-md text-primary-foreground/90 md:text-lg">
                    تسوق الآن واحصل على خصومات حصرية على مجموعة مختارة من المنتجات. العرض محدود لفترة محدودة!
                  </p>
                  <div>
                    <Button variant="secondary" size="lg" className="font-medium">
                      تسوق الآن
                    </Button>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <Image src="/placeholder.svg?height=400&width=600" alt="عرض خاص" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Selling */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">الأكثر مبيعاً</h2>
              <Link href="#" className="text-sm font-medium text-primary hover:underline">
                عرض الكل
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((product) => (
                <div
                  key={product}
                  className="group relative rounded-lg border bg-background p-3 transition-colors hover:border-primary"
                >
                  <div className="absolute left-3 top-3 z-10">
                    {product === 1 && (
                      <span className="inline-flex items-center rounded-full bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                        الأكثر مبيعاً
                      </span>
                    )}
                  </div>
                  <Link href="#" className="absolute left-3 top-3 z-20">
                    <Heart className="h-5 w-5 text-muted-foreground transition-colors hover:text-red-500" />
                    <span className="sr-only">إضافة للمفضلة</span>
                  </Link>
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-md">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=منتج ${product + 4}`}
                      alt={`منتج ${product + 4}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">منتج شائع {product}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                            />
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground">(250)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-x-1 space-x-reverse">
                        <span className="font-medium">299 د.أ</span>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">إضافة للسلة</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted py-8 md:py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 text-center">آراء عملائنا</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "أحمد محمد",
                  comment: "تجربة تسوق رائعة، منتجات عالية الجودة وتوصيل سريع. سأعود للتسوق مرة أخرى بالتأكيد.",
                  rating: 5,
                },
                {
                  name: "سارة أحمد",
                  comment: "أسعار تنافسية ومنتجات متنوعة. أنصح الجميع بالتسوق من هذا المتجر الرائع.",
                  rating: 4,
                },
                {
                  name: "محمد علي",
                  comment: "خدمة عملاء ممتازة وسرعة في الرد على الاستفسارات. تجربة تسوق لا تُنسى.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="mt-4 mb-2">{testimonial.comment}</p>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="rounded-lg bg-primary p-6 md:p-10">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">اشترك في نشرتنا البريدية</h2>
                <p className="mt-2 text-primary-foreground/90 md:text-lg">
                  احصل على آخر العروض والتخفيضات مباشرة إلى بريدك الإلكتروني
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-2 mx-auto max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input type="email" placeholder="بريدك الإلكتروني" className="w-full pr-10 bg-white" />
                  </div>
                  <Button variant="secondary" className="font-medium">
                    اشترك الآن
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">متجري</h3>
              <p className="text-sm text-muted-foreground">
                متجرك الإلكتروني الأول للتسوق بثقة وأمان مع تشكيلة واسعة من المنتجات عالية الجودة.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">فيسبوك</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">انستغرام</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">تويتر</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">روابط سريعة</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  الصفحة الرئيسية
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  منتجاتنا
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  العروض الخاصة
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  من نحن
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  اتصل بنا
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">خدمة العملاء</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  الأسئلة الشائعة
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  سياسة الشحن
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  سياسة الإرجاع
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  الخصوصية
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  الشروط والأحكام
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">اتصل بنا</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>الاردن - عمان</p>
                <p>البريد الإلكتروني: info@matjari.com</p>
                <p>الهاتف: +966 12 345 6789</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} متجري. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg?height=30&width=50&text=Visa" alt="Visa" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50&text=MC" alt="MasterCard" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50&text=PayPal" alt="PayPal" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50&text=Mada" alt="Mada" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
