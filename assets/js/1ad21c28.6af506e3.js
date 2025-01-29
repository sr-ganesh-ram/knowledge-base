"use strict";(self.webpackChunkkb_src=self.webpackChunkkb_src||[]).push([[385],{822:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Cloud/AWS/batch","title":"batch","description":"AWS Batch \ud83d\udce6 - In 5 Minutes","source":"@site/docs/Cloud/AWS/batch.md","sourceDirName":"Cloud/AWS","slug":"/Cloud/AWS/batch","permalink":"/knowledge-base/docs/Cloud/AWS/batch","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cloud/AWS/batch.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Translate your site","permalink":"/knowledge-base/docs/tutorial-extras/translate-your-site"},"next":{"title":"textract","permalink":"/knowledge-base/docs/Cloud/AWS/textract"}}');var t=s(4848),r=s(8453);const o={},a=void 0,l={},c=[{value:"AWS Batch \ud83d\udce6 - In 5 Minutes",id:"aws-batch----in-5-minutes",level:2},{value:"\ud83d\udce6 What",id:"-what",level:3},{value:"\ud83c\udfaf Why",id:"-why",level:3},{value:"\u2699\ufe0f Where Applied",id:"\ufe0f-where-applied",level:3},{value:"\ud83e\udde0 How it Works",id:"-how-it-works",level:3},{value:"\ud83d\udd04 Lifecycle",id:"-lifecycle",level:3},{value:"\ud83d\udcca Diagram",id:"-diagram",level:3},{value:"\ud83d\udd17 Related Items",id:"-related-items",level:3}];function d(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"aws-batch----in-5-minutes",children:"AWS Batch \ud83d\udce6 - In 5 Minutes"}),"\n",(0,t.jsx)(n.h3,{id:"-what",children:"\ud83d\udce6 What"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Managed Batch Processing:"})," AWS Batch is a fully managed service that allows you to run batch computing workloads on the AWS cloud."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Scaling:"})," It dynamically provisions the optimal quantity and type of compute resources based on your job requirements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job Scheduling:"})," AWS Batch manages the scheduling and execution of your batch jobs without requiring you to install and manage batch processing software."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container & Non-container Support:"})," Supports running jobs packaged as Docker containers or as traditional executable scripts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration:"})," Integrates seamlessly with other AWS services like S3, CloudWatch, and IAM."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"-why",children:"\ud83c\udfaf Why"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplified Batch Management:"})," It reduces the operational burden of managing batch processing infrastructure."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cost Optimization:"})," Automatically scales resources based on demand, helping to reduce costs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Faster Time-to-Results:"})," Simplifies setting up and running batch jobs, accelerating the overall process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability:"})," Easily scales to accommodate larger workloads and fluctuating demand."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reliability:"})," Provides a reliable and fault-tolerant environment for running your jobs."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-where-applied",children:"\u2699\ufe0f Where Applied"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Financial Modeling:"})," Running large financial simulations and analysis."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Genomics Research:"})," Processing genomic data and running bioinformatics analyses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Image and Video Processing:"})," Encoding, converting, and processing large volumes of media data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scientific Simulations:"})," Conducting complex scientific calculations and simulations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Transformation:"})," Performing large-scale data transformation and ETL processes."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"-how-it-works",children:"\ud83e\udde0 How it Works"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job Definition:"})," You define your jobs by specifying the execution details, including the Docker image, script, and resources required."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compute Environment:"})," You set up compute environments, which define the type and number of EC2 instances to use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job Queue:"})," You submit jobs to a queue, and AWS Batch manages their execution according to the queue priority."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Provisioning:"})," AWS Batch automatically provisions and manages the required compute resources, ensuring efficient resource utilization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitoring:"})," You can monitor job status, resource usage, and logs through AWS Management Console and CloudWatch."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"-lifecycle",children:"\ud83d\udd04 Lifecycle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job Submission:"})," Define the job specifications and submit it to the appropriate job queue."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resource Provisioning:"})," AWS Batch provisions compute resources, including EC2 instances, based on the job requirements and compute environment settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job Execution:"})," Jobs are picked up from the queue and executed on the provisioned compute resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitoring and Logging:"})," The status, logs, and metrics are available for monitoring through CloudWatch and the AWS console."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resource Release:"})," After the job is completed, AWS Batch releases the compute resources to save on costs."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"-diagram",children:"\ud83d\udcca Diagram"}),"\n",(0,t.jsx)(n.img,{src:"./2e1ea13d41ba6ef2e0665382975dfa5a8aca4b09.svg",title:"`mermaid` image"}),"\n",(0,t.jsx)(n.h3,{id:"-related-items",children:"\ud83d\udd17 Related Items"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS EC2:"})," The compute instances utilized by AWS Batch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS S3:"})," Storage for job data and outputs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS CloudWatch:"})," Monitoring and logging service for AWS Batch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS IAM:"})," Manages access and permissions for AWS Batch resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker:"})," Used for packaging and running jobs in containers."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);