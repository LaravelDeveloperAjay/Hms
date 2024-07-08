import React from 'react'
import Header from './Header'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function Home() {
  var settings = {
    dots: true,
    infinite: true,
  
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
<Header/>
<div className="container-fluid relative">
  <div className='text-center mt-10'>
  <p className='text-7xl'>Grow your business and deliver a higher standard of care.</p>
  <p className='text-2xl mt-8'>ShiftCare is an easy to use software platform that cuts paperwork and boosts efficiency, giving <br /> support providers more time for what matters. Delivering highly personalised client care, while <br /> growing your business.</p>
  <p className='mt-10 text-2xl'>Join 4,000+ care provider businesses that use ShiftCare</p>
  <ul className='flex justify-center items-cente mt-10'>
 <li className=' border-slate-300 border-2 w-72 p-2 rounded-2xl'><input type="email" placeholder='Enter your email' /> </li><li className=' bg-red-700 p-2  rounded-2xl text-white '><button>Book a demo</button></li></ul>
 <b>Subscriptions start at just $9 user / month.</b>
 </div>
 <div className='reivew mt-10'>
  <ul className='flex justify-center items-center gap-10'>
    <li ><img src="https://shiftcare.com/assets/companies/capterra.svg" alt="" />
    <button>4.8<i class="bi bi-star-fill"></i></button></li>
    <li ><img src="https://shiftcare.com/assets/companies/xero.svg" alt="" />
    <button>4.8<i class="bi bi-star-fill"></i></button></li>
    <li ><img src="https://shiftcare.com/assets/companies/google.svg" alt="" />
    <button>4.8<i class="bi bi-star-fill"></i></button></li>
    <li ><img src="https://shiftcare.com/assets/companies/software-advice.svg" alt="" />
    <button>4.8<i class="bi bi-star-fill"></i></button></li>
    <li ><img src="https://shiftcare.com/assets/companies/g2.svg" alt="" />
    <button>4.8<i class="bi bi-star-fill"></i></button></li>
  </ul>
 </div>
 <div className=' roundphotos absolute'>  
  <div className='p1'><img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9ORElTLmpwZw==/NDIS.jpg?q=80&fm=webp&fit=crop-51-52-1.7&w=295&h=295&s=04ad2091316c55d8d361871e4299fac5" alt="" /></div>

 <div className='p2'><img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9BZ2VkLUNhcmUtV29tYW4tLS1TaGlmdENhcmUuanBlZw==/Aged-Care-Woman---ShiftCare.jpeg?q=80&fm=webp&fit=crop-34-32-2.8&w=297&h=297&s=be36060a8ffcddda7decc9bc7121704c" alt="" /></div>
 <div className='p3'><img src="https://shiftcare.com/img/asset/YXNzZXRzL3Jldmlld3MvQXNpYW4tcGVyc29uLWFnZWQtY2FyZS1zb2Z0d2FyZS5qcGVn/Asian-person-aged-care-software.jpeg?q=80&fm=webp&fit=crop-31-27-2.4&w=296&h=296&s=5989b1135b59abeac22b00115d7dcc73" alt="" /></div>

  <div className=' p4 '><img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9CbGluZC1tYW4tLS1EaXNhYmlsaXR5LmpwZWc=/Blind-man---Disability.jpeg?q=80&fm=webp&fit=crop-69-38-2.1&w=266&h=266&s=983f22589256aabd20b7a41cd9265847" alt="" /></div>
  <div className='p5'><img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9BZ2VkLUNhcmUtLS1zb2x1dGlvbnMuanBn/Aged-Care---solutions.jpg?q=80&fm=webp&fit=crop-50-43-1.3&w=263&h=263&s=07f2db34c01a1c4183367bd1b56ecfca" alt="" /></div> 
  <div className='p6'><img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9Ib21lcGFnZS0tLVlvdW5nLUJveS0tLURpc2FiaWxpdHkucG5n/Homepage---Young-Boy---Disability.png?q=80&fm=webp&fit=crop-33-40-1.8&w=257&h=257&s=a913e51187348de244173ef18bcefe27" alt="" /></div>
  </div>

  </div>
  <div className="container-fluid mt-44 ">
  <img src="https://shiftcare.com/img/asset/YXNzZXRzL2hlcm8tc2NoZWR1bGVyLSgxKS5wbmc=/hero-scheduler-%281%29.png?q=80&fm=webp&fit=crop-50-50&w=1922&h=830&s=4206126f3a4bf2a09bf7bf365b92242c" alt="" />
  </div>
  <div className="container-fluid">
    <p className='text-center text-2xl '>WE POWER SOME OF AUSTRALIA'S LEADING SUPPORT PROVIDERS</p>
    <ul className=' nwds flex gap-10 mt-4'>
      <li><img src="https://shiftcare.com/img/asset/YXNzZXRzL2NvbXBhbmllcy9ud2RzLnBuZw==/nwds.png?fm=webp&q=90&fit=crop-50-50&w=1104&h=361&s=9e4505eb8571b46ebd6b9c4c9880a13a" alt="" /></li>
      <li><img src="https://shiftcare.com/img/asset/YXNzZXRzL2NvbXBhbmllcy9hZHMtY2FyZS5wbmc=/ads-care.png?fm=webp&q=90&fit=crop-50-50&w=269&h=65&s=bfcd0231a8a4a9090b00bf94629595dc" alt="" /></li>
      <li><img src="https://shiftcare.com/img/asset/YXNzZXRzL2NvbXBhbmllcy9zdWVzLW51cnNpbmcucG5n/sues-nursing.png?fm=webp&q=90&fit=crop-50-50&w=204&h=74&s=e36e4c74b876a678571f185cff11cbe1" alt="" /></li>
      <li><img src="https://shiftcare.com/img/asset/YXNzZXRzL2NvbXBhbmllcy9iYXJuYWRvcy5wbmc=/barnados.png?fm=webp&q=90&fit=crop-50-50&w=368&h=112&s=8d2e40028f4fb8313048ffad07c4549d" alt="" /></li>
      <li><img src="https://shiftcare.com/img/asset/YXNzZXRzL2NvbXBhbmllcy9oZWFsdGgtY2FyZS1yZXF1ZXN0LnBuZw==/health-care-request.png?fm=webp&q=90&fit=crop-50-50&w=347&h=93&s=fc6466301ad681dfae2b4d942ffb2395" alt="" /></li>
      </ul>
  </div>
  <div className="container-fluid mt-10">
    <div className="row">
      <div className="col-md-6">
        <div ><img src="https://shiftcare.com/img/asset/YXNzZXRzL2ZlYXR1cmVzL3BsYWNlaG9sZGVycy8xLlByb2dyZXNzLU5vdGVzLnBuZw==/1.Progress-Notes.png?q=80&fm=webp&fit=crop-50-50&w=1316&h=732&s=42fe1a59bb59c9ec1a3ae1defa7362cd" alt="" /></div>
      </div>
      <div className="col-md-6">
        <div className='mt-10 mx-10'><p className='text-xl'>CARE MANAGEMENT</p>
        <p className='text-3xl mt-10 text-slate-950'>More time for what matters</p>
        <p className='text-xl'>ShiftCare’s care management features make it easier for you and your teams to deliver highly personalised support to clients and their families.</p>
        
        <button className='text-blue-700 underline mt-10 text-2xl'>Learn more about care management <i class="bi bi-arrow-right"></i></button></div>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-10">
    <div className="row">
    
      <div className="col-md-6">
        <div className='mt-10 mx-10'><p className='text-xl'>ROSTERING</p>
        <p className='text-3xl mt-10 text-slate-950'>Team management made easy</p>
        <p className='text-xl'>We’ve made it easy to plan and organise teams, shifts and rosters, helping you deliver a more effective, efficient service.</p>
        
        <button className='text-blue-700 underline mt-10 text-2xl'>Learn more about  Rostering<i class="bi bi-arrow-right"></i></button></div>
      </div>
      <div className="col-md-6">
        <div ><img src="https://shiftcare.com/img/asset/YXNzZXRzLzMucm9zdGVyaW5nLXYuMy5wbmc=/3.rostering-v.3.png?q=80&fm=webp&fit=crop-50-50&w=1258&h=1078&s=1e6e5b83ad0455b6f2f43ada5f83864b" alt="" /></div>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-10">
    <div className="row">
      <div className="col-md-6">
        <div ><img src="https://shiftcare.com/img/asset/YXNzZXRzLzIuZnVuZC1tYW5hZ2VtZW50LXYuNS5wbmc=/2.fund-management-v.5.png?q=80&fm=webp&fit=crop-50-50&w=1301&h=1196&s=1be6001caffaa8f3a0b3413de4cdba20" alt="" /></div>
      </div>
      <div className="col-md-6">
        <div className='mt-10 mx-10'><p className='text-xl'>INVOICING</p>
        <p className='text-3xl mt-10 text-slate-950'>Simplify accounting and boost efficiency</p>
        <p className='text-xl'>With the management of invoices, timesheets and expenses seamlessly integrated, along with NDIS pricing, ShiftCare makes accurate accounting simple, reducing your workload, and helping you grow.</p>
        
        <button className='text-blue-700 underline mt-10 text-2xl'>Learn more about invoicing<i class="bi bi-arrow-right"></i></button></div>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-10">
    <div className="row">
    
      <div className="col-md-6">
        <div className='mt-10 mx-10'><p className='text-xl'>SHIFTCARE APP</p>
        <p className='text-3xl mt-10 text-slate-950'>Support on the go</p>
        <p className='text-xl'>We connect you and your teams with all you need to manage shifts, co-ordinate clients and deliver quality care, wherever they are.</p>
        
        
        <button className='text-blue-700 underline mt-10 text-2xl'>Learn how the Shiftcare app works<i class="bi bi-arrow-right"></i></button></div>
      </div>
      <div className="col-md-6">
        <div ><img src="https://shiftcare.com/img/asset/YXNzZXRzL2ZlYXR1cmVzL3BsYWNlaG9sZGVycy8xLkNhcmUtUGxhbnMucG5n/1.Care-Plans.png?q=80&fm=webp&fit=crop-50-50&w=879&h=778&s=49b8787673c450113c58916bdc604e21" alt="" /></div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <p className='text-4xl'>Discover the difference ShiftCare <br /> can make to your business</p>
    <div className="row">
      <div className="col-md-6">
        <div className='flex mt-10'>
          <div>
            <img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9Tb2x1dGlvbnMtLS1ORElTLVByb3ZpZGVyLVNvZnR3YXJlLS0tU2hpZnRDYXJlLmpwZWc=/Solutions---NDIS-Provider-Software---ShiftCare.jpeg?fm=webp&q=90&fit=crop-34-36-1.7&w=251&h=251&s=ed02a73d8638f3a3232e2196a32da783" alt=""className='h-44  rounded-full' />
         
          </div>
          <div className='mx-10'>  <p className='text-2xl text-black-950'>
          NDIS Software</p>
             <p>We make it easier to deliver, price and bill support  plans for NDIS clients.</p>
             <button className='text-blue-700 underline  text-2xl'>Learn more<i class="bi bi-arrow-right"></i></button>
             </div>
        </div>
        <div className='flex mt-10'>
          <div>
            <img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9Tb2x1dGlvbnMtLS1BbGxpZWQtSGVhbHRoLS0tU2hpZnRDYXJlLmpwZWc=/Solutions---Allied-Health---ShiftCare.jpeg?fm=webp&q=90&fit=crop-77-10-2.1&w=248&h=248&s=9bd381cebfda664a3c098667891b4161" alt="" className='h-44  rounded-full' />
          </div>
       
        <div className='mx-10'>  <p className='text-2xl text-black-950'>
        
Allied Health</p>
             <p>WAccess all you need to more effectively manage the delivery of quality patient care.</p>
             <button className='text-blue-700 underline text-2xl'>Learn more<i class="bi bi-arrow-right"></i></button>
             </div> </div>
      </div>
      <div className="col-md-6">  <div className='flex mt-10'>
          <div>
            <img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9Tb2x1dGlvbnMtLS1BZ2VkLWNhcmUtc29mdHdhcmUtLS1TaGlmdENBcmUuanBlZw==/Solutions---Aged-care-software---ShiftCAre.jpeg?fm=webp&q=90&fit=crop-40-46-1.5&w=1341&h=1341&s=b770faa1dcb30ef25920dcbc8c63256c" alt=""className='h-44  rounded-full' />
         
          </div>
          <div className='mx-10'>  <p className='text-2xl text-black-950'>
          
Aged Care</p>
             <p>Simplifying the planning, delivery and invoicing of aged care services.</p>
             <button className='text-blue-700 underline  text-2xl'>Learn more<i class="bi bi-arrow-right"></i></button>
             </div>
        </div>
        <div className='flex mt-10'>
          <div>
            <img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvbHV0aW9ucy9MYXJnZS0tLVN1cHBvcnQtQ29vcmRpbmF0b3ItcGhvbmUtbmRpcy1jbGllbnQuanBlZw==/Large---Support-Coordinator-phone-ndis-client.jpeg?fm=webp&q=90&fit=crop-34-26-2.6&w=1920&h=1920&s=2c87b35b94e87ccbcb962b82a57c10d1" alt="" className='h-44  rounded-full' />
          </div>
       
        <div className='mx-10'>  <p className='text-2xl text-black-950'>
        

        Support Coordination</p>
             <p>Help families access the best possible care, and keep billing simple for them.</p>
             <button className='text-blue-700 underline text-2xl'>Learn more<i class="bi bi-arrow-right"></i></button>
             </div> </div></div>
    </div>
  </div>
  <div className="container-fluid mt-10">
    <div className="row">
      <div className="col-md-6">
        <div>
        <div className='mt-36 mx-10'><p className='text-xl'>NOMINATIONS CLOSED</p>
        <p className='text-5xl mt-10 text-slate-950'>ShiftCare Support Worker of the Year</p>
        <p className='text-xl mt-10'>Join us in this heartfelt tribute to the individuals who embody the best of care and compassion. Let’s celebrate those who make a real difference every day. Your nomination could be the moment that highlights their dedication and inspires a whole community.</p></div>
 
        </div>
      </div>
      <div className="col-md-6">
        <div><img src="https://shiftcare.com/img/asset/YXNzZXRzL2Rlc2lnbi01LSgyKS5wbmc=/design-5-%282%29.png?q=80&fm=webp&fit=crop-49-17-1&w=1080&h=771&s=9fef397570b39a7275089267c0554dcb" alt="" /></div>
        <div className=' shadow-2xl mt-10 p-4'><p>It amazes me how much incredible work is being done by the support workers who use our app each day. It’s time to celebrate their contributions and shine a light on these often unsung heroes of the care industry.</p>
        <ul className='flex mx-10'>
          <li><img src="https://shiftcare.com/img/asset/YXNzZXRzL3NvY2lhbC10ZW1wbGF0ZXMtYXVzLSgxMikuanBn/social-templates-aus-%2812%29.jpg?q=80&fm=webp&fit=crop-50-50-1.2&w=100&h=100&s=0040256386e0988344ec196fd86c0ea8" alt="" className=' h-20 rounded-full' /></li>
          <li className='mx-4 mt-2'><b>Mathew Cagney</b>
          <p>ShiftCare CEO</p></li></ul></div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className='text-center mt-10'>
      <p className='text-2xl'>TESTIMONIALS</p>
      <b className='text-4xl'>ShiftCare 5-Star Reviews</b>
    </div>
    <div className='testimonials mt-10'>
  <ul className='flex justify-center items-center gap-10'>
    <li ><img src="https://shiftcare.com/assets/companies/capterra.svg" alt="" />
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
    <li ><img src="https://shiftcare.com/assets/companies/xero.svg" alt="" />
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
    <li ><img src="https://shiftcare.com/assets/companies/google.svg" alt="" />
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
    <li ><img src="https://shiftcare.com/assets/companies/software-advice.svg" alt="" />
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
    <li ><img src="https://shiftcare.com/assets/companies/g2.svg" alt="" />
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
  </ul>
 </div>
  </div>
  <div className="container-fluid mt-20 star">
    <div className="row">
      <div className="col-md-4">
        <div className=' p-5 bg-slate-300'><p>It's just really user friendly.i have some support workers who stuggle with technology.but they found shiftcare simple.that's kudos to the designers.</p>
        <b>Shaun</b>
        <p  className='text-blue-600'>Business Owner</p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
      </div>
      <div className="col-md-4">
      <div className=' p-5 bg-slate-300'><p>In audit and compliance,We've got everything now.if we have any query about what we're doing,it's just at the tip of a finger.</p>
        <b> Clover Laurier</b>
        <p className='text-blue-600'> OWNER manager,Next Wave Supports</p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
      </div>
      <div className="col-md-4">
      <div className=' p-5 bg-slate-300'><p>Great app to get an instant update about your shifts and your clients needs: behaviour and so on which helps give more personal care.</p>
        <b>Sajana</b>
        <p className='text-blue-600'>Bloomfield care Services</p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-10 star">
    <div className="row">
      <div className="col-md-4">
      <div className=' p-5 bg-slate-300'><p className='mt-4'>When a caregiver cancelled a shift on me, it used to take us 2 hours to find a replacement, now it takes me minutes with ShiftCare.</p>
        <b>Olena</b>
        <p className='text-blue-600'>Rainbow Club</p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
      </div>
      <div className="col-md-4">
      <div className=' p-5 bg-slate-300'><p>The admin that took a full day now gets done in about an hour. It's definitely caused a lot less stress. I'm very busy, and it has given me time to focus on more important things.</p>
        <b>Alana</b>
        <p className='text-blue-600' >Mighty Mentors
        </p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
      </div>
      <div className="col-md-4">
      <div className=' p-4 bg-slate-300'><p>My business has been with Shiftcare for around two years. It is a fantastic system. I save so much time in regards to rostering, sending invoices, staff management, and so much more. It also communicates with my accounting software with a few clicks of a button. I highly recommend Shiftcare.</p>
        <b>Ricky Mc</b>
        <p className='text-blue-600' >ShiftCare User</p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
      </div>
    </div>
  </div>
  <p className='text-center text-2xl mt-20'>BADGES OF EXCELLENCE</p>
  <div className="container-fluid">
    <div className='flex mt-20'>
      <div><img src="https://shiftcare.com/img/asset/YXNzZXRzL2JhZGdlcy9jYS1lYXNlX29mX3VzZS0yMDI0LnBuZw==/ca-ease_of_use-2024.png?fm=webp&q=90&fit=crop-50-50&w=469&h=438&s=a37d0e5195fdafaa7ae0210c1b320ae5" alt="" className='h-56 w-96'/></div>
      <div><img src="https://shiftcare.com/img/asset/YXNzZXRzL2JhZGdlcy9zYS1jdXN0b21lcl9zdXBwb3J0LTIwMjQucG5n/sa-customer_support-2024.png?fm=webp&q=90&fit=crop-50-50&w=345&h=363&s=85fc1c006182deafefcc4af3de2c0198" alt=""className='h-56 w-96' /></div>
      <div><img src="https://shiftcare.com/img/asset/YXNzZXRzL2JhZGdlcy9ob21lY2FyZWFnZW5jeW1hbmFnZW1lbnRfYmVzdGVzdGltYXRlZHJvaV9yb2ktMTcxNTY1MTM0Ny5wbmc=/homecareagencymanagement_bestestimatedroi_roi-1715651347.png?fm=webp&q=90&fit=crop-50-50&w=770&h=1000&s=840f4074b22ae6ebc6b70e3c902681cc" alt=""  className='h-56 w-96'/></div>
      <div><img src="https://shiftcare.com/img/asset/YXNzZXRzL2JhZGdlcy9zYS1jdXN0b21lcl9zdXBwb3J0LTIwMjQucG5n/sa-customer_support-2024.png?fm=webp&q=90&fit=crop-50-50&w=345&h=363&s=85fc1c006182deafefcc4af3de2c0198" alt=""className='h-56 w-96' /></div>
      <div><img src="https://shiftcare.com/img/asset/YXNzZXRzL2JhZGdlcy9jYS1lYXNlX29mX3VzZS0yMDI0LnBuZw==/ca-ease_of_use-2024.png?fm=webp&q=90&fit=crop-50-50&w=469&h=438&s=a37d0e5195fdafaa7ae0210c1b320ae5" alt="" className='h-56 w-96'/></div>
    </div>
  </div>
  <div className="container-fluid mt-20">
    <b className='text-4xl '>The latest insights from ShiftCare</b>
    <div className="row mt-20">
      <div className="col-md-4">
        <div>
          <img src="https://shiftcare.com/img/asset/YXNzZXRzL2ltYWdlLXJlc2l6aW5nLShmYWNlYm9vay1jb3ZlcikuanBn/image-resizing-%28facebook-cover%29.jpg?q=80&fm=webp&fit=crop-50-50&w=562&h=331&s=c4f2173a9b800a6f3b9dd7bc333fa530" alt=""  className=' rounded-2xl'/>
          <p className='mt-10 text-xl'>NDIS</p>
          <b className='text-xl'>A Provider's comprehensive Guide to the ndis</b>
        </div>
      </div>
      <div className="col-md-4"> <div>
          <img src="https://shiftcare.com/img/asset/YXNzZXRzL2ltYWdlcy90YWtpbmdfcHJvZ3Jlc3Nfbm90ZS5qcGc=/taking_progress_note.jpg?q=80&fm=webp&fit=crop-50-50&w=1000&h=588&s=5e3e167b9a6cfe2c80a9bafbd3b3a9cf" alt=""  className=' rounded-2xl'/>
          <p className='mt-10 text-xl'>PROGRESS NOTES</p>
          <b className='text-xl'>Complete Guide to Progress Notes in Disability & Aged Care</b>
        </div></div>
      <div className="col-md-4"> <div>
          <img src="https://shiftcare.com/img/asset/YXNzZXRzL2Jsb2ctaW1hZ2VzLSgxNSkuanBn/blog-images-%2815%29.jpg?q=80&fm=webp&fit=crop-50-50&w=562&h=331&s=8842cd17105610c18f40b7f3d2923ab9" alt=""  className=' rounded-2xl'/>
          <p className='mt-10 text-xl'>CARE MANAGEMENT</p>
          <b className='text-xl'>How to Transition to a New Care Management Software</b>
        </div></div>
    </div>
  </div>
  <div className="containeer-fluid bg-blue-950 text-white p-10 mt-20">
    <div className='text-center'><b className='text-3xl'>Start your free 7 day trial.</b>
    <p className='mt-10 text-xl'>Deliver a higher standard of care, all from just $9 per user a month.</p>
    < button className=' bg-red-400 p-2  rounded-2xl text-white mt-10'>Try for free</button>
    <button className=' bg-blue-900 p-2  rounded-2xl mx-10'> compare plans</button></div>
  </div>
  <div className=' flex gap-20 justify-center'>
    <div className='text-center border-r-2 p-4'>
      <b className='text-4xl'>94%</b>
    <p className='text-xl'>Support Rating</p>
    </div>
    <div className='text-center border-r-2 p-4'>
      <b className='text-4xl'>100M+</b>
    <p className='text-xl'> Hours Scheduled</p>
    </div><div className='text-center border-r-2 p-4'>
      <b className='text-4xl'>200,000+</b>
    <p className='text-xl'>Clients Supported</p>
    </div><div className='text-center border-r-2 p-4'>
      <b className='text-4xl'>$1B+</b>
    <p className='text-xl'>Revenue Generated</p>
    </div>
  </div>
  <div className="container-fluid mt-36 border-b-4">
    <div className="row">
      <div className="col-md-2">
        <div><b  className=' text-red-400'>FEATURES</b>
        <ul>
          <li>Care Management</li>
          <li>Rostering</li>
          <li>Invoicing</li>
          <li>ShiftCare App</li>
          <li>Scheduler</li>
          <li>Progress Notes</li>
          <li>Job Board</li>
          <li>Custom Forms</li>
          <li>Incident Management</li>
          <li>Document Management</li>
          </ul></div>
      </div>
      <div className="col-md-2">
        <div>
          <b></b>
          <ul className='mt-4'>
            <li>NDIS Payment Requests</li>
            <li>Care Plans</li>
            <li>Accounting Integrations</li>
            <li>CRM</li>
            <li>Funds Management</li>
            <li>ShiftCare Connect</li>
            <li>Time & Attendance</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <b className=' text-red-400'>SOLUTIONS</b>
        <ul>
          <li>NDIS Software</li>
          <li>Aged Care</li>
          <li>Allied Health</li>
          <li>Support Coordination</li>
        </ul>
      </div>
      <div className="col-md-2">
        <b  className=' text-red-400'>COMPANY</b>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>Book a Demo</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className="col-md-2">
        <b  className=' text-red-400'>RESOURCES</b>
        <ul>
          <li>Blog</li>
          <li>Guides</li>
          <li>Customer Stories</li>
          <li>Webinars</li>
          <li>Savings Calculator </li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="col-md-2"></div>
    </div>

  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <div className='p-2'>
          <b>Shift Care</b>
          <p>© 2024 ShiftCare. All rights reserved.</p>
        </div>
      </div>
      <div className="col-md-3"></div>
      <div className="col-md-3"></div>
      <div className="col-md-3">
        <div className='p-2'>     <ul className='flex text-3xl gap-10'>
        <li className=' hover:text-red-600'><i class="bi bi-instagram"></i></li>
        <li className=' hover:text-blue-600'><i class="bi bi-facebook"></i></li>
        <li className=' hover:text-blue-600'><i class="bi bi-linkedin"></i></li>
        <li className=' hover:text-red-600'><i class="bi bi-youtube"></i></li>
       </ul>
       <p className='flex gap-2'>       <p>Privacy Policy</p>
       <p>Terms of Use
       </p></p>

       </div>
  
      </div>
    </div>
  </div>

    </div>
  )
}

export default Home