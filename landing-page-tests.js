// Unit Tests
describe('Hero Section', () => {
  it('should have a product image', () => {
    const heroImage = document.querySelector('.hero-image');
    expect(heroImage).not.toBeNull();
  });

  it('should have a call-to-action button', () => {
    const ctaButton = document.querySelector('.hero-cta');
    expect(ctaButton).not.toBeNull();
  });
});

describe('Features Section', () => {
  it('should have 3 feature elements', () => {
    const featureElements = document.querySelectorAll('.feature');
    expect(featureElements.length).toBe(3);
  });

  it('each feature should have a title and description', () => {
    const featureElements = document.querySelectorAll('.feature');
    featureElements.forEach((feature) => {
      const title = feature.querySelector('.feature-title');
      const description = feature.querySelector('.feature-description');
      expect(title).not.toBeNull();
      expect(description).not.toBeNull();
    });
  });
});

describe('Testimonials Section', () => {
  it('should have at least one testimonial', () => {
    const testimonialElements = document.querySelectorAll('.testimonial');
    expect(testimonialElements.length).toBeGreaterThan(0);
  });

  it('each testimonial should have a quote and author', () => {
    const testimonialElements = document.querySelectorAll('.testimonial');
    testimonialElements.forEach((testimonial) => {
      const quote = testimonial.querySelector('.testimonial-quote');
      const author = testimonial.querySelector('.testimonial-author');
      expect(quote).not.toBeNull();
      expect(author).not.toBeNull();
    });
  });
});

describe('Contact Form', () => {
  it('should have name, email, and message inputs', () => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    expect(nameInput).not.toBeNull();
    expect(emailInput).not.toBeNull();
    expect(messageInput).not.toBeNull();
  });

  it('should have a submit button', () => {
    const submitButton = document.querySelector('#submit-btn');
    expect(submitButton).not.toBeNull();
  });
});

describe('Footer', () => {
  it('should have social media links', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });
});

// Integration Tests
describe('Form Submission', () => {
  it('should send the form data to an email', () => {
    // Simulate form submission
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const submitButton = document.querySelector('#submit-btn');

    nameInput.value = 'John Doe';
    emailInput.value = 'john@example.com';
    messageInput.value = 'Hello, world!';

    // Trigger form submission
    submitButton.click();

    // Assert that the form data was sent to an email
    // (You'll need to set up a mock email service for this test)
    expect(mockEmailService.sendEmail).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, world!'
    });
  });
});

// Performance Tests
describe('Page Load Time', () => {
  it('should load within 2 seconds', (done) => {
    const startTime = performance.now();
    // Simulate page load
    window.location.href = '/';
    const endTime = performance.now();
    const loadTime = (endTime - startTime) / 1000;
    expect(loadTime).toBeLessThan(2);