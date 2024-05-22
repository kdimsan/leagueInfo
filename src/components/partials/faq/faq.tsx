"use client";

import React, { useState } from "react";
import { faqData } from "./faqData";

export default function Faq() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (index === showAnswer && showAnswer != null) {
      // Se o mesmo item estiver expandido, recolha-o
      setShowAnswer(null);
    } else {
      // Caso contrário, expanda o item clicado
      setShowAnswer(index);
    }
  };
  return (
    <div>
      <div className="py-3">
        <h2 className="font-bold text-lg">Frequent Asked Questions</h2>
        <div className="flex flex-col gap-6 mt-3">
          {faqData.map((item, index) => (
            <div key={index}>
              <details>
                <summary className="cursor-pointer">{item.question}</summary>
                <div className="px-5">{item.answer}</div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
