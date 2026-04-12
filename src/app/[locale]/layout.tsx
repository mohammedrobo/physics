import type { Locale } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      lang={locale}
      style={{
        fontFamily: isArabic
          ? "var(--font-ibm-plex-arabic), 'IBM Plex Sans Arabic', sans-serif"
          : "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
      }}
    >
      {children}
    </div>
  );
}
