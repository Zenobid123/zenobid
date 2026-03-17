import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import zenobidLogo from "@/assets/zenobid-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={zenobidLogo} alt="Zenobid" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            To ensure your personal data is always protected when you access / use the features of the Zenobid application, we have set it through this privacy policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Acquisition or Collection of Personal Data</h2>
          <p className="text-muted-foreground">
            When you access / use the features of the Zenobid application, you directly or indirectly have provided personal data to us.
          </p>
          <p className="text-muted-foreground">
            We collect your personal data in the following ways.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>When you / your co-workers have given permission for your personal data covers name, NIK, email, telephone and other information that have been agreed to be registered into the Zenobid system in order to own the account used to access the Zenobid application.</li>
            <li>Transaction data that has been entered into the Zenobid application</li>
            <li>Files in the form of photos, documents or others that you have uploaded through the features of Zenobid application</li>
            <li>Record time, IP, Device on every activity you do on the Zenobid application</li>
          </ul>

          <p className="text-muted-foreground mt-4">
            You hereby represent and warrant that the Personal Data that you enter into your Zenobid application is that your Personal Data is true, accurate, and based on circumstances the truth, and you are fully responsible for such Personal Data and You have full authority and/or personal right to submit Personal Data to We, including releasing us from all civil lawsuits or criminal charges that arise of misleading information in connection with the Personal Data that you enter into Platforms and/or Features.
          </p>

          <p className="text-muted-foreground mt-4">
            We reserve the right from time to time to request authentication, verification and/or updates of your Personal Data, so that your data and information is accurate, complete and up-to-date, including temporarily/permanently suspending or not allowing you to access certain features in case you haven't authenticated and upgraded your personal data.
          </p>

          <p className="text-muted-foreground mt-4">
            By continuing to access the Platform, use our Features and/or other services, You hereby give clear and unequivocal consent to us to obtain and collect your Personal Data as described above.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Use of Personal Data</h2>
          <p className="text-muted-foreground">
            Personal data that we have collected and obtained will be used by us entirely for the benefit of You and Us. We may use the Personal Data for, among other things:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Processing personal data for your needs in accessing/using the features of Zenobid application</li>
            <li>Presenting transaction data information to users in the same sourcing system according to data access policy agreed upon.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p className="text-muted-foreground">
            You can submit questions, criticisms, suggestions and complaints regarding the Personal Data via e-mail <a href="mailto:info@zenobid.com" className="text-primary hover:underline">info@zenobid.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
