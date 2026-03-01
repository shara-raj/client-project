import Button from "@/components/ui/Button";

const ContactForm = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Send a Message</h2>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-lg border px-4 py-3"
        />

        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-lg border px-4 py-3"
        />

        <textarea
          placeholder="Your message"
          rows={6}
          className="w-full rounded-lg border px-4 py-3"
        />

        <Button type="button">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
