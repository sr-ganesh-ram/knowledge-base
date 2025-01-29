"use strict";(self.webpackChunkkb_src=self.webpackChunkkb_src||[]).push([[8449],{7563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"Cloud/AWS/textract","title":"textract","description":"AWS Textract","source":"@site/docs/Cloud/AWS/textract.md","sourceDirName":"Cloud/AWS","slug":"/Cloud/AWS/textract","permalink":"/knowledge-base/docs/Cloud/AWS/textract","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cloud/AWS/textract.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"batch","permalink":"/knowledge-base/docs/Cloud/AWS/batch"},"next":{"title":"vectorization","permalink":"/knowledge-base/docs/Cloud/AWS/vectorization"}}');var r=t(4848),i=t(8453);const a={},c=void 0,l={},o=[{value:"AWS Textract",id:"aws-textract",level:2}];function d(e){const n={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"aws-textract",children:"AWS Textract"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Textract"})," is an AWS service that automatically extracts text and data from documents such as scanned documents, PDFs, and images."]}),"\n",(0,r.jsx)(n.li,{children:"It uses machine learning to accurately identify text, tables, forms, and other key information within documents."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Why:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Automation:"})," Automates the time-consuming and error-prone process of manual data entry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Accuracy:"})," Provides high accuracy in text extraction, minimizing human error."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scalability:"})," Easily handles large volumes of documents with minimal effort."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cost-effectiveness:"})," Reduces the need for manual labor, leading to significant cost savings."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Where Applied:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Invoice Processing:"})," Extracting invoice data for automated payment processing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Financial Documents:"})," Analyzing bank statements, insurance claims, and loan applications."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Legal Documents:"})," Processing contracts, legal filings, and discovery documents."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Healthcare:"})," Extracting data from medical records, prescriptions, and insurance forms."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"How to Use:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Upload Documents:"})," Upload your documents to the AWS S3 bucket."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Start Analysis:"})," Initiate a Textract analysis job by specifying the document location and desired output formats (e.g., JSON, HTML)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retrieve Results:"})," Access the analysis results, which include extracted text, tables, forms, and other relevant information."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Integrate with Applications:"})," Integrate the extracted data with your existing applications or workflows."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lifecycle:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Document Upload:"})," Upload documents to AWS S3."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Analysis Job:"})," Submit an analysis job to Textract."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Analysis Execution:"})," Textract analyzes the documents and generates results."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Result Retrieval:"})," Retrieve analysis results from the specified location."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Integration:"})," Integrate extracted data with downstream applications."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagram (Mermaid.js):"})}),"\n",(0,r.jsx)(n.img,{src:"./90f8f2732808899d7724cd14732828265a5a7a9f.svg",title:"`mermaid` image"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Related Services:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Amazon Comprehend"}),"\n",(0,r.jsx)(n.li,{children:"Amazon Rekognition"}),"\n",(0,r.jsx)(n.li,{children:"Amazon Transcribe"}),"\n",(0,r.jsx)(n.li,{children:"Amazon Polly"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);