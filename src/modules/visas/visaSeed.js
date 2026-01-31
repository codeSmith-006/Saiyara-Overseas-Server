import mongoose from "mongoose";
import dotenv from "dotenv";
import Visa from "./visa.model.js"

dotenv.config();

export const visas = [
  {
    slug: "saudi-work-1",
    country: "saudi-arabia",
    category: "work-permit",
    title: {
      en: "Work Permit - Saudi Arabia",
      bn: "ওয়ার্ক পারমিট - সৌদি আরব",
    },
    salary: { min: 1000, max: 1800, currency: "SAR" },
    processingTime: { en: "45-60 days", bn: "৪৫-৬০ দিন" },
    validity: { en: "2 years", bn: "২ বছর" },
    fee: 90000,
  },
  {
    slug: "kuwait-factory-1",
    country: "kuwait",
    category: "factory",
    title: {
      en: "Factory Worker - Kuwait",
      bn: "ফ্যাক্টরি কর্মী - কুয়েত",
    },
    salary: { min: 120, max: 200, currency: "KWD" },
    processingTime: { en: "40-55 days", bn: "৪০-৫৫ দিন" },
    validity: { en: "2 years", bn: "২ বছর" },
    fee: 95000,
  },
  {
    slug: "uae-skilled-2",
    country: "uae",
    category: "skilled-worker",
    title: {
      en: "Skilled Worker - UAE",
      bn: "দক্ষ কর্মী - ইউএই",
    },
    salary: { min: 2000, max: 4000, currency: "AED" },
    processingTime: { en: "30-45 days", bn: "৩০-৪৫ দিন" },
    validity: { en: "2 years", bn: "২ বছর" },
    fee: 100000,
  },
  {
    slug: "maldives-hotel-1",
    country: "maldives",
    category: "work-permit",
    title: {
      en: "Hotel Worker - Maldives",
      bn: "হোটেল কর্মী - মালদ্বীপ",
    },
    salary: { min: 500, max: 900, currency: "USD" },
    processingTime: { en: "25-40 days", bn: "২৫-৪০ দিন" },
    validity: { en: "1 year", bn: "১ বছর" },
    fee: 85000,
  },
  {
    slug: "russia-company-1",
    country: "russia",
    category: "company-sponsor",
    title: {
      en: "Company Sponsored Job - Russia",
      bn: "কোম্পানি স্পন্সর জব - রাশিয়া",
    },
    salary: { min: 900, max: 1600, currency: "USD" },
    processingTime: { en: "90-120 days", bn: "৯০-১২০ দিন" },
    validity: { en: "1 year", bn: "১ বছর" },
    fee: 130000,
  },
  {
    slug: "qatar-construction-1",
    country: "qatar",
    category: "factory",
    title: {
      en: "Construction Worker - Qatar",
      bn: "নির্মাণ কর্মী - কাতার",
    },
    salary: { min: 1200, max: 2000, currency: "QAR" },
    processingTime: { en: "35-50 days", bn: "৩৫-৫০ দিন" },
    validity: { en: "2 years", bn: "২ বছর" },
    fee: 95000,
  },
  {
    slug: "japan-skilled-1",
    country: "japan",
    category: "skilled-worker",
    title: {
      en: "Technical Intern - Japan",
      bn: "টেকনিক্যাল ইন্টার্ন - জাপান",
    },
    salary: { min: 150000, max: 250000, currency: "JPY" },
    processingTime: { en: "60-90 days", bn: "৬০-৯০ দিন" },
    validity: { en: "3 years", bn: "৩ বছর" },
    fee: 140000,
  },
  {
    slug: "malaysia-work-2",
    country: "malaysia",
    category: "work-permit",
    title: {
      en: "Work Permit - Malaysia",
      bn: "ওয়ার্ক পারমিট - মালয়েশিয়া",
    },
    salary: { min: 1200, max: 2800, currency: "MYR" },
    processingTime: { en: "60-90 days", bn: "৬০-৯০ দিন" },
    validity: { en: "1 year", bn: "১ বছর" },
    fee: 75000,
  },
];

await mongoose.connect(process.env.MONGO_URI);

await Visa.deleteMany(); // optional (reset)
await Visa.insertMany(visas);

console.log("✅ Visa data seeded successfully");
process.exit();
