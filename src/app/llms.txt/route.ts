import { NextResponse } from "next/server";
import { siteConfig, services } from "@/lib/data";

export async function GET() {
  const baseUrl = siteConfig.url;

  let llmsTxt = `# ${siteConfig.name}\n\n`;
  llmsTxt += `> ${siteConfig.description}\n\n`;

  llmsTxt += `## Main Pages\n`;
  llmsTxt += `- [Home](${baseUrl}/)\n`;
  llmsTxt += `- [About Us](${baseUrl}/about)\n`;
  llmsTxt += `- [Services](${baseUrl}/services)\n`;
  llmsTxt += `- [Why Qatar](${baseUrl}/why-qatar)\n`;
  llmsTxt += `- [Blog](${baseUrl}/blog)\n`;
  llmsTxt += `- [Contact Us](${baseUrl}/contact)\n\n`;

  llmsTxt += `## Our Services\n`;
  services.forEach((service) => {
    llmsTxt += `- [${service.title}](${baseUrl}/services/${service.id}): ${service.subtitle}. ${service.description}\n`;
  });

  llmsTxt += `\n## Contact Information\n`;
  llmsTxt += `- Phone: ${siteConfig.phone}\n`;
  llmsTxt += `- Email: ${siteConfig.email}\n`;
  llmsTxt += `- WhatsApp: ${siteConfig.whatsapp}\n`;
  llmsTxt += `- Address: ${siteConfig.address}\n`;

  return new NextResponse(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
