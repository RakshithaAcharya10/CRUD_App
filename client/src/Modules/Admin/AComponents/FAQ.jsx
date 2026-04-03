import React, { useState } from 'react'
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function FAQ() {

  // ✅ Dummy FAQ Data
  const [faqs] = useState([
    {
      question: "What is an FAQ section?",
      answer: "An FAQ (Frequently Asked Questions) section is a part of a website that provides answers to common user queries. It helps users quickly understand how the system works without needing support. FAQs are usually displayed in a structured format like expandable lists. They improve clarity by covering important topics such as usage and policies. Users can easily find information without navigating multiple pages. It saves time for both users and administrators. In web applications, FAQs enhance usability and accessibility. Overall, it improves the user experience and system efficiency."
    },
    {
      question: "Why are FAQs important?",
      answer: "FAQs are important because they provide quick solutions to common problems. They reduce the need for customer support and save time. Users can find answers instantly without waiting for responses. FAQs help in improving user satisfaction and trust. They also make the platform more user-friendly and informative. Businesses can reduce repetitive queries using FAQs. They guide new users in understanding the system better. Overall, FAQs improve efficiency and communication."
    },
    {
      question: "How can I book a Product?",
      answer: "To book a product, first go to the products page in the application. Browse or filter products based on your preference. Click on a product to view its complete details. Check the price, description, and availability. Then click on the “Buy” or “Book” button. Enter required details like address and payment method. Confirm the order and complete the payment process. Your product will be successfully booked and tracked."
    },
    {
      question: "What is the refund policy?",
      answer: "The refund policy explains when a user can get their money back. Refunds are usually given for defective or incorrect products. Users must raise a request within a specific time period. The request is reviewed by the admin or support team. If approved, the refund process is initiated. It usually takes 5 to 7 working days to complete. The amount is returned to the original payment method. Users should check the policy before making a purchase."
    }
  ])

  return (
    <div style={{ padding: "40px 60px", minHeight: "100vh" }}>
      
      <Typography variant="h5" style={{ marginBottom: "16px", fontWeight:"bold", color:"red"}}>
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          style={{
            marginBottom: "15px",
            border: "1px solid #000",
            boxShadow: "none"
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontWeight:"bold", fontSize:"18px"}}>{faq.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

    </div>
  )
}