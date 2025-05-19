import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { validateForm, FormData, FormErrors } from '../utils/formUtils';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      
      // Reset submission state after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-950 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Book your appointment or reach out with any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-secondary-950 text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-serif font-bold mb-6">Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-300">123 Barber Street, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">(212) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">info@pmcbarber.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                      <li>Saturday: 10:00 AM - 6:00 PM</li>
                      <li>Sunday: 11:00 AM - 5:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['instagram', 'facebook', 'twitter'].map(platform => (
                    <a 
                      key={platform}
                      href="#" 
                      className="bg-secondary-800 hover:bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="capitalize">{platform.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-secondary-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-secondary-950 mb-6">Book an Appointment</h3>
              
              {submitted ? (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                  <p className="font-medium">Thank you for your booking request!</p>
                  <p>We will confirm your appointment shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-secondary-800 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-secondary-800 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your email"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-secondary-800 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-secondary-800 mb-2">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="Classic Haircut">Classic Haircut - $35</option>
                        <option value="Beard Trim">Beard Trim - $25</option>
                        <option value="Hot Towel Shave">Hot Towel Shave - $40</option>
                        <option value="Haircut & Beard Combo">Haircut & Beard Combo - $55</option>
                        <option value="Hair Coloring">Hair Coloring - $65+</option>
                        <option value="Kid's Haircut">Kid's Haircut - $25</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-secondary-800 mb-2">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md ${
                          errors.date ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-secondary-800 mb-2">Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md ${
                          errors.time ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-secondary-800 mb-2">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Any special requests or questions?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700 transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;