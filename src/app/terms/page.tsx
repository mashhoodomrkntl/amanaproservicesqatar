import PageHeader from "@/components/PageHeader";

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms & Conditions" />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-blue max-w-none">
            <p>Last updated: May 6, 2026</p>
            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
            <h2>2. Services</h2>
            <p>Amanah Business Services provides PRO and business setup consultancy services in Qatar. All services are subject to the terms of a separate service agreement.</p>
            <h2>3. Intellectual Property</h2>
            <p>The content on this website, including text, graphics, and logos, is the property of Amanah Business Services and is protected by copyright laws.</p>
            <h2>4. Limitation of Liability</h2>
            <p>In no event shall Amanah Business Services be liable for any damages arising out of the use or inability to use the materials on our website.</p>
            <h2>5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the State of Qatar.</p>
          </div>
        </div>
      </section>
    </>
  );
}
