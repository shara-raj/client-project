import { contactContent } from "../content/contact.content";

const ContactInfoSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Reach Us</h2>

      <div className="space-y-4 text-base leading-relaxed">
        {contactContent.info.map((item) => (
          <p key={item.label}>
            <span className="font-medium">{item.label}:</span>{" "}
            {item.href ? (
              <a href={item.href} className="underline underline-offset-4">
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </p>
        ))}

        <p>Response time: Within 24–48 hours</p>
        <p>For inquiries, please use the form alongside.</p>
      </div>
    </div>
  );
};

export default ContactInfoSection;
