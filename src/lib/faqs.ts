import type { FaqItem } from "./seo";

export const faqCategories: { name: string; items: FaqItem[] }[] = [
  {
    name: "Getting started",
    items: [
      {
        q: "How do I get started with Support Plan Navigators?",
        a: "Call us on 0439 953 767, email admin@spnav.com.au, send a message through our contact form, or ask someone to refer you. We’ll arrange a free, no-obligation chat to understand your needs and check your NDIS plan.",
      },
      {
        q: "Who can make a referral?",
        a: "Anyone, with the participant’s consent. Participants can self-refer, and families, carers, Local Area Coordinators, NDIA planners, GPs, psychologists, hospitals and community organisations can refer through our online referral form.",
      },
      {
        q: "Do I need to be an NDIS participant?",
        a: "Our Support Coordination and Psychosocial Recovery Coaching services are funded through NDIS plans, so you’ll need to be an NDIS participant with the relevant funding. If you’re not yet on the NDIS, we can point you toward information about applying.",
      },
      {
        q: "Where do you provide services?",
        a: "We support NDIS participants across the Orana region of NSW, with face-to-face, phone and video sessions. Talk to us about your location and how you prefer to meet.",
      },
    ],
  },
  {
    name: "Support Coordination",
    items: [
      {
        q: "What is NDIS Support Coordination?",
        a: "Support Coordination is a capacity building support that helps you understand and implement your NDIS plan. A Support Coordinator connects you with providers and community services, helps with service agreements, monitors your budget and builds your ability to coordinate your own supports.",
      },
      {
        q: "What level of Support Coordination do you provide?",
        a: "We provide Level 2 Support Coordination, also called Coordination of Supports. It’s the most common level funded in NDIS plans, and the NDIA decides which level to fund based on your circumstances. Alongside it, we provide Psychosocial Recovery Coaching for participants living with psychosocial disability. Not sure what’s in your plan? We’ll check it with you for free.",
      },
      {
        q: "Can I change my Support Coordinator?",
        a: "Yes. You have choice and control over who provides your supports. Check the notice period in your current service agreement, and we’ll help make the handover as smooth as possible.",
      },
      {
        q: "Will my Support Coordinator help with my plan reassessment?",
        a: "Yes. We gather evidence of your progress and any unmet needs, and prepare a report to support your next plan reassessment. We can also help you prepare for the meeting itself.",
      },
    ],
  },
  {
    name: "Recovery Coaching",
    items: [
      {
        q: "What is a Psychosocial Recovery Coach?",
        a: "A Psychosocial Recovery Coach is an NDIS-funded support worker who specialises in supporting people with psychosocial disability. They help you build capacity, design a recovery plan, connect with services and coordinate your NDIS supports with a recovery focus.",
      },
      {
        q: "Is recovery coaching the same as therapy?",
        a: "No. Recovery coaching complements clinical care from your GP, psychologist or psychiatrist but doesn’t replace it. It focuses on practical, everyday steps, skills and connections that support your recovery.",
      },
      {
        q: "Can I have both a Support Coordinator and a Recovery Coach?",
        a: "Some participants have funding for both. When that happens, roles need to be clearly defined to avoid duplication. We can help you work out what suits your situation.",
      },
      {
        q: "How often will I see my Recovery Coach?",
        a: "It depends on your goals and the funding in your plan. Some people meet weekly while getting started and less often over time. We’ll agree on a rhythm that works for you.",
      },
    ],
  },
  {
    name: "Funding & costs",
    items: [
      {
        q: "How much does it cost?",
        a: "When Support Coordination or Psychosocial Recovery Coaching is funded in your NDIS plan, our services are paid from that funding, with no out-of-pocket cost to you. Our prices stay within the NDIS Pricing Arrangements and Price Limits.",
      },
      {
        q: "Which part of my NDIS plan pays for these supports?",
        a: "Both are usually funded under the Capacity Building – Support Coordination budget. This funding can only be used for these types of supports. If you’re unsure, we’ll check your plan with you.",
      },
      {
        q: "Does it matter if I’m self-managed, plan-managed or NDIA-managed?",
        a: "No. We work with participants under all plan management types and collaborate with your plan manager if you have one.",
      },
      {
        q: "What if Support Coordination isn’t in my plan?",
        a: "You can ask the NDIA to consider it at your next plan reassessment, or request a reassessment if your circumstances have changed significantly. We can explain what kind of evidence may help.",
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((c) => c.items);
