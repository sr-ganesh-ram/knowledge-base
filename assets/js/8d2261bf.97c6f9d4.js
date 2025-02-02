"use strict";(self.webpackChunkkb_src=self.webpackChunkkb_src||[]).push([[1188],{1972:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"AI-ML/Lifecycle/Vectorization","title":"Vectorization","description":"Vectorization in AI/ML \ud83e\uddee - In 5 Minutes","source":"@site/docs/AI-ML/2.Lifecycle/Vectorization.md","sourceDirName":"AI-ML/2.Lifecycle","slug":"/AI-ML/Lifecycle/Vectorization","permalink":"/knowledge-base/docs/AI-ML/Lifecycle/Vectorization","draft":false,"unlisted":false,"editUrl":"https://github.com/sr-ganesh-ram/knowledge-base/tree/main/docs/AI-ML/2.Lifecycle/Vectorization.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"MLOps","permalink":"/knowledge-base/docs/AI-ML/Lifecycle/MLOps"},"next":{"title":"Data Scientist","permalink":"/knowledge-base/docs/AI-ML/Data Scientist"}}');var s=i(4848),r=i(8453);const a={},o=void 0,l={},c=[{value:"Vectorization in AI/ML \ud83e\uddee - In 5 Minutes",id:"vectorization-in-aiml----in-5-minutes",level:2},{value:"\ud83e\uddee What",id:"-what",level:3},{value:"\ud83c\udfaf Why",id:"-why",level:3},{value:"\u2699\ufe0f Where Applied",id:"\ufe0f-where-applied",level:3},{value:"\ud83e\udde0 How it Works",id:"-how-it-works",level:3},{value:"\ud83d\udd04 Lifecycle",id:"-lifecycle",level:3},{value:"\ud83d\udcca Diagram",id:"-diagram",level:3},{value:"\ud83d\udd17 Related Items",id:"-related-items",level:3}];function d(e){const n={h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"vectorization-in-aiml----in-5-minutes",children:"Vectorization in AI/ML \ud83e\uddee - In 5 Minutes"}),"\n",(0,s.jsx)(n.h3,{id:"-what",children:"\ud83e\uddee What"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Transformation:"})," Vectorization is the process of converting data, whether it's text, images, or other forms, into numerical vectors. These vectors are arrays of numbers that a machine learning model can understand and process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Feature Representation:"})," It involves mapping complex data into a lower-dimensional space while retaining important features. This is crucial for machine learning algorithms that require numerical inputs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Numerical Encoding:"})," Vectorization essentially encodes data into a format that allows for mathematical operations, making it suitable for various machine learning computations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Core of ML:"})," It's a fundamental step in most ML pipelines, converting the raw data into a usable format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficiency:"})," Vectorization allows for parallel processing, which greatly speeds up computations in ML models."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"-why",children:"\ud83c\udfaf Why"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model Compatibility:"})," Machine learning algorithms, especially those based on linear algebra, require numerical data as input. Vectorization makes non-numerical data usable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Computational Efficiency:"})," By converting data into vectors, we can leverage efficient matrix and vector operations, resulting in significant speed improvements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Feature Extraction:"})," Vectorization helps extract meaningful features from the data, which the model can learn from. This simplifies and enhances the learning process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dimensionality Reduction"}),": Techniques within vectorization like embedding can reduce the complexity of data by transforming it into a space with fewer dimensions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Standardization:"})," It provides a standard format for data, making it easier to process diverse types of information within the same machine learning pipeline."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-where-applied",children:"\u2699\ufe0f Where Applied"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Natural Language Processing (NLP):"})," Text data is converted into word or sentence embeddings (vectors) for tasks like sentiment analysis and machine translation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image Recognition:"})," Images are transformed into vectors for input into convolutional neural networks (CNNs)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Recommender Systems:"})," User and item data are vectorized to determine similarities and make personalized recommendations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Time Series Analysis:"})," Time-dependent data is vectorized to identify patterns and make predictions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Audio Processing:"})," Sound signals are converted into vectors for speech recognition and audio analysis."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"-how-it-works",children:"\ud83e\udde0 How it Works"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tokenization:"})," For text, it breaks down the text into smaller units, such as words or characters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"})," It assigns numerical vectors to these tokens, often using techniques like Word2Vec, GloVe, or BERT embeddings, which capture semantic meanings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Feature Mapping:"})," For images, it maps pixels to numerical values, and the process can involve various transformations and feature extraction methods."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Normalization:"})," To ensure all features are on the same scale, vectors might be normalized."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vector Space:"})," These numerical representations are then placed into a vector space where distance, similarity, and other mathematical computations can be made."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"-lifecycle",children:"\ud83d\udd04 Lifecycle"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Input:"})," Starts with raw data like text, images, or audio."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Preprocessing:"})," Clean the data, like removing noise and filling in missing values."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tokenization/Feature Extraction:"})," Breaks down the data into basic units or extracts features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectorization:"})," Converts processed data into numerical vectors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model Input:"})," The vectorized data is then used as input to a machine learning model."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"-diagram",children:"\ud83d\udcca Diagram"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR\r\n    A[Raw Data] --\x3e B(Preprocessing);\r\n    B --\x3e C{Tokenization/Feature Extraction};\r\n    C --\x3e D[Vectorization];\r\n    D --\x3e E(Model Input);\r\n    E --\x3e F{Machine Learning Model};\r\n    F --\x3e G[Output/Result];"}),"\n",(0,s.jsx)(n.h3,{id:"-related-items",children:"\ud83d\udd17 Related Items"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Word Embeddings:"})," Numerical representations of words."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"One-Hot Encoding"}),": A method to convert categorical data into binary vectors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TF-IDF:"})," A technique used in NLP to reflect how important a word is to a document."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);