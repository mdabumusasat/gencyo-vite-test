import React, { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ onSubmit, className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        if (onSubmit) {
          await onSubmit(formData);
        } else {
          // Default form submission (can be customized)
          console.log("Form data:", formData);
        }

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onSubmit]
  );

  return (
    <form
      method="post"
      action="#"
      id="contact-form"
      className={className}
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="form-group col-lg-6 col-md-6 col-sm-12">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="error-message" role="alert">
              {errors.name}
            </span>
          )}
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="error-message" role="alert">
              {errors.email}
            </span>
          )}
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            autoComplete="off"
            value={formData.subject}
            onChange={handleChange}
            required
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="error-message" role="alert">
              {errors.subject}
            </span>
          )}
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className="error-message" role="alert">
              {errors.phone}
            </span>
          )}
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <textarea
            name="message"
            placeholder="Write a Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="error-message" role="alert">
              {errors.message}
            </span>
          )}
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            disabled={isSubmitting}
          >
            <span className="btn-title">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default memo(ContactForm);

