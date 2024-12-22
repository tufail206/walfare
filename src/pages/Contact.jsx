import React from 'react';
import { useForm } from 'react-hook-form';



const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState('');

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSuccess('');
    // Simulate API submission (replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess('Your message has been successfully submitted!');
      reset(); // Reset the form fields after successful submission
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>

      {/* Success message */}
      {success && (
        <div className="text-green-500 mb-4 text-center">{success}</div>
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address',
              },
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\d{11}$/,
                message: 'Phone number must be 11 digits',
              },
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-1/2 py-2 px-4 rounded-md text-white ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-500 hover:bg-indigo-600'
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

    </div>
  );
};

export default Contact;
