const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to reach out via email or connect on LinkedIn!</p>
        <a
          href="mailto:shraddha@example.com"
          className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
