export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-slate-300 mb-8">I'm available for freelance projects and full-time roles. Let's build something great together.</p>

          <form className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your name" className="p-3 rounded-md bg-slate-700 text-white" />
              <input type="email" placeholder="Your email" className="p-3 rounded-md bg-slate-700 text-white" />
            </div>
            <textarea placeholder="Your message" className="w-full p-3 rounded-md bg-slate-700 text-white mb-4" rows={6}></textarea>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-rose-600 rounded-md font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
