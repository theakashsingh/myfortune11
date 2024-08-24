import { useScroll } from "../scrollContext";
import FAQCard from "./FAQCard";
import faqJson from "./faq.json"

const FAQ = () => {
  const { faqRef } = useScroll();
  return (
    <div ref={faqRef} className="w-full bg-[#F2F2F2] py-12">
      <div>
        <div className="text-center px-3">
          <h1 className="text-h1-heading text-[#032071] mb-4">Frequently Asked Questions</h1>
          <p className="text-[#878A9B] mb-12">
          Our FAQ section addresses many common inquiries about fantasy gaming on MyFortune11.
          <br />
          If you have any additional questions or need further assistance, please don’t hesitate to reach out to our support team. 
          </p>
        </div>
        <div className="px-5 flex flex-col gap-6">
          {
            faqJson.map((faq,index)=>(
              <FAQCard
              key={index}
            question={faq.question}
            answer={faq.answer}
          />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FAQ;
