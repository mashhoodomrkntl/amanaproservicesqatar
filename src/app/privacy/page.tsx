import PageHeader from "@/components/PageHeader";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-blue max-w-none">
            <p>Last updated: May 6, 2026</p>
            <h2>1. Introduction</h2>
            <p>Welcome to Amanah Business Services. We are committed to protecting your personal data and your right to privacy.</p>
            <h2>2. Information We Collect</h2>
            <p>We collect personal information that you provide to us when you express an interest in obtaining information about us or our products and services, such as your name, email address, and phone number.</p>
            <h2>3. How We Use Your Information</h2>
            <p>We use personal information collected via our website for several purposes, including to provide and deliver the services you request, and to communicate with you.</p>
            <h2>4. Sharing Your Information</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <h2>5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at info@amanahbusiness.qa.</p>
          </div>
        </div>
      </section>
    </>
  );
}
