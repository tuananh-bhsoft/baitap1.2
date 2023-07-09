import contactAnimation from "../../../../assets/imgs/contact/ContactAnimations.svg";

const ContactUs = () => {
  return (
    <div className="contact-us flex justify-between items-center gap-x-40px mt-200px laptop:flex-col laptop:gap-y-100px laptop:py-0 laptop:px-40px">
      <div className="section-content flex-1">
        <img className="max-w-full" src={contactAnimation} alt="Contact us" />
      </div>
      <div className="section-info flex flex-col justify-between gap-y-10px items-start flex-1 laptop:w-full">
        <p className="section-header text-secondary text-base leading-tight tracking-normal">
          Contact Us
        </p>
        <p className="section-title text-primary-m text-4xl leading-tight tracking-normal w-4/5">
          Send your inquiry to our expert team
        </p>
        <p className="section-description text-tertiary-m text-base font-normal">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form action="/" method="POST" id="form">
          <div className="name flex justify-between items-center gap-x-40px mobile:flex-col">
            <input
              className="w-full p-20px border border-solid border-[#d9ddfe] rounded-2xl mt-40px placeholder:text-tertiary-l placeholder:text-base placeholder:font-normal placeholder:tracking-widest"
              type="text"
              name="first_name"
              placeholder="First name"
            />
            <input
              className="w-full p-20px border border-solid border-[#d9ddfe] rounded-2xl mt-40px placeholder:text-tertiary-l placeholder:text-base placeholder:font-normal placeholder:tracking-widest"
              type="text"
              name="last_name"
              placeholder="Last name"
            />
          </div>
          <input
            className="w-full p-20px border border-solid border-[#d9ddfe] rounded-2xl mt-40px placeholder:text-tertiary-l placeholder:text-base placeholder:font-normal placeholder:tracking-widest"
            type="email"
            name="email_address"
            placeholder="Email address"
          />
          <input
            className="w-full p-20px border border-solid border-[#d9ddfe] rounded-2xl mt-40px placeholder:text-tertiary-l placeholder:text-base placeholder:font-normal placeholder:tracking-widest"
            type="text"
            name="subject_message"
            placeholder="Subject message"
          />
          <textarea
            className="w-full p-20px border border-solid border-[#d9ddfe] rounded-2xl mt-40px resize-none placeholder:text-tertiary-l placeholder:text-base placeholder:font-normal placeholder:tracking-widest"
            name="message"
            placeholder="Your inquiry here"
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="bg-primary text-white text-base tracking-widest py-4 px-40px border-none rounded-full shadow-[0px_17px_22px_#eee] transition-all duration-300 ease-in-out mt-40px hover:cursor-pointer hover:bg-secondary-m hover:shadow-[0px_25px_50px_25px_#e6e9fd]"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
