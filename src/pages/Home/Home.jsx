import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between m-auto w-full">
        <div className="flex flex-col pt-5 md:p-24 text-center">
          <div>
            <img src="/logo.png" alt="" className="h-24 m-auto md:h-60"/>
          </div>
          <div className="text-m pl-7 pr-7 md:text-4xl text-center font-bold ">
            CREDIT CARD FRAUD DETECTION
          </div>
          <div className="text-sm pl-6 pr-6 md:text-2xl font-medium">
            Secure Your Transactions, Protect Your Peace of Mind.
          </div>
        </div>
        <div>
          <img src="/land.png" alt="land" className="h-72 md:h-[40rem]" />
        </div>
      </div>
      <div className="w-full pl-10 pr-10 mt-10">
        <h1>
          <b>What is Credit Card Fraud Detection?</b>
        </h1>
        <div>
          Credit card fraud detection is the process of identifying and
          preventing unauthorized use of a credit card. This involves using
          advanced technologies and analytics to monitor transactions, identify
          unusual patterns or anomalies, and flag potentially fraudulent
          activity. Here's a breakdown of how it works:
          <p>
            <b>Data Collection:</b> Transaction data is gathered, including
            purchase amounts, locations, times, and customer information.
          </p>
          <p>
            <b>Pattern Analysis:</b> Algorithms and machine learning models
            analyze this data to identify patterns that might indicate
            fraudulent activity, such as sudden large purchases, unusual
            spending patterns, or multiple transactions in a short period.
          </p>
          <p>
            <b>Risk Assessment:</b> Based on the identified patterns, a risk
            score is assigned to each transaction. Higher-risk transactions are
            flagged for further review.
          </p>
          <p>
            <b>Fraud Prevention:</b> If a transaction is deemed suspicious, it
            may be blocked, or additional verification steps (like two-factor
            authentication) may be required.
          </p>
        </div>
      </div>
      <div className="w-full pl-10 pr-10 mt-10">
        <h1><b>Common Types of Credit Card Fraud Detection</b></h1>

        <p>
          <b>Rule-Based Systems:</b> These systems use set rules to spot unusual
          transactions. For example, if a credit card is used in different
          countries within a short time, it might be flagged as suspicious.
        </p>

        <p>
          <b>Machine Learning Models:</b> These models analyze past transaction
          data to detect fraud patterns. They continuously learn and adapt to
          new data, improving their accuracy over time.
        </p>

        <p>
          <b>Anomaly Detection:</b> This method identifies transactions that
          stand out from the norm, such as unusually large amounts, transactions
          in unexpected locations, or at odd times.
        </p>

        <p>
          <b>Behavioral Analysis:</b> This approach monitors a cardholder's
          usual spending habits and flags transactions that differ from the
          norm.
        </p>

        <p>
          <b>Geolocation Analysis:</b> By checking where a transaction occurs
          against the cardholder's typical locations, this method helps spot
          potentially fraudulent activity.
        </p>
      </div>
      <div className="w-full pl-10 pr-10 mt-10">
        <h1><b>How It's Different from Similar Fraud Detection</b></h1>
        
        <p>Credit card fraud detection has unique characteristics due to the nature of credit card transactions. Unlike other types of fraud detection, it:</p>

        <ul>
        <li className="list-disc">
        Focuses on financial transactions, especially electronic payments.
        </li>

        <li className="list-disc">
        Involves real-time monitoring to prevent immediate financial loss.
        </li>

        <li className="list-disc">
        Utilizes behavioral patterns and transaction history specific to individual cardholders.
        </li>

        <li className="list-disc">
        Needs to balance between minimizing false positives (legitimate transactions flagged as fraud) and false negatives (fraudulent transactions not detected).  
        </li>
        </ul>
        <p>It specifically focuses on preventing fraudulent purchases made using credit cards. It differs from other types of fraud detection, such as insurance fraud detection or healthcare fraud detection, which focuses on preventing fraudulent claims or transactions in those specific industries.</p>
      </div>
    </>
  );
}

export default Home;
