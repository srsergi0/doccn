import React from 'react';
import { Sheet, Frame, Flow } from '../components/document/primitives/geometric-primitives';

export const AttentionIsAllYouNeedTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="portrait" className="p-12 relative bg-white shadow-2xl font-serif text-neutral-900 leading-relaxed">
        <Frame className="h-full">
          <Flow className="space-y-4">
            {/* Top NIPS Paper Thick Header Rule */}
            <div className="border-t-4 border-black w-full pt-4">
              <h1 className="text-2xl md:text-3xl font-bold text-center tracking-tight font-serif text-black my-4">
                Attention Is All You Need
              </h1>
              <div className="border-b border-black w-full mb-8" />
            </div>

            {/* Authors Block (Exact 3-tier NIPS layout) */}
            <div className="text-center font-serif text-[9pt] leading-snug space-y-4 mb-8">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <strong className="font-bold block text-black">Ashish Vaswani*</strong>
                  <span className="text-neutral-700 block">Google Brain</span>
                  <span className="font-mono text-[8pt] text-neutral-600">avaswani@google.com</span>
                </div>
                <div>
                  <strong className="font-bold block text-black">Noam Shazeer*</strong>
                  <span className="text-neutral-700 block">Google Brain</span>
                  <span className="font-mono text-[8pt] text-neutral-600">noam@google.com</span>
                </div>
                <div>
                  <strong className="font-bold block text-black">Niki Parmar*</strong>
                  <span className="text-neutral-700 block">Google Research</span>
                  <span className="font-mono text-[8pt] text-neutral-600">nikip@google.com</span>
                </div>
                <div>
                  <strong className="font-bold block text-black">Jakob Uszkoreit*</strong>
                  <span className="text-neutral-700 block">Google Research</span>
                  <span className="font-mono text-[8pt] text-neutral-600">usz@google.com</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div>
                  <strong className="font-bold block text-black">Llion Jones*</strong>
                  <span className="text-neutral-700 block">Google Research</span>
                  <span className="font-mono text-[8pt] text-neutral-600">llion@google.com</span>
                </div>
                <div>
                  <strong className="font-bold block text-black">Aidan N. Gomez* †</strong>
                  <span className="text-neutral-700 block">University of Toronto</span>
                  <span className="font-mono text-[8pt] text-neutral-600">aidan@cs.toronto.edu</span>
                </div>
                <div>
                  <strong className="font-bold block text-black">Łukasz Kaiser*</strong>
                  <span className="text-neutral-700 block">Google Brain</span>
                  <span className="font-mono text-[8pt] text-neutral-600">lukaszkaiser@google.com</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="pt-2">
                <strong className="font-bold block text-black">Illia Polosukhin* ‡</strong>
                <span className="font-mono text-[8pt] text-neutral-600">illia.polosukhin@gmail.com</span>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="max-w-xl mx-auto my-6 text-[9.5pt] leading-snug">
              <h2 className="text-center font-bold text-black text-sm uppercase tracking-wide mb-2 font-serif">
                Abstract
              </h2>
              <p className="text-justify font-serif text-neutral-900 leading-relaxed">
                The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.0 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature.
              </p>
            </div>

            {/* Section 1: Introduction */}
            <div className="mt-6 text-[10pt] leading-relaxed">
              <h3 className="font-bold text-black text-base mb-2 font-serif">
                1 &nbsp; Introduction
              </h3>
              <p className="text-justify font-serif text-neutral-900 leading-relaxed mb-3">
                Recurrent neural networks, long short-term memory{' '}
                <span className="inline-block border border-emerald-600 px-1 py-0 text-[8pt] font-mono text-emerald-700 bg-emerald-50 rounded-xs">
                  [12]
                </span>{' '}
                and gated recurrent{' '}
                <span className="inline-block border border-emerald-600 px-1 py-0 text-[8pt] font-mono text-emerald-700 bg-emerald-50 rounded-xs">
                  [7]
                </span>{' '}
                neural networks in particular, have been firmly established as state of the art approaches in sequence modeling and transduction problems such as language modeling and machine translation{' '}
                <span className="inline-block border border-emerald-600 px-1 py-0 text-[8pt] font-mono text-emerald-700 bg-emerald-50 rounded-xs">
                  [29, 2, 5]
                </span>. Numerous efforts have since continued to push the boundaries of recurrent language models and encoder-decoder architectures{' '}
                <span className="inline-block border border-emerald-600 px-1 py-0 text-[8pt] font-mono text-emerald-700 bg-emerald-50 rounded-xs">
                  [31, 21, 13]
                </span>.
              </p>
            </div>

            {/* Footnotes & NIPS Conference Running Footer */}
            <div className="mt-auto pt-6 border-t border-neutral-300 text-[7.5pt] font-serif text-neutral-700 space-y-1">
              <div>* Equal contribution. Listing order is random. Jakob proposed replacing RNNs with self-attention and started the effort to evaluate this idea. Ashish, with Illia, designed and implemented the first Transformer models and has been crucially involved in every aspect of this work.</div>
              <div>† Work performed while at Google Brain.</div>
              <div>‡ Work performed while at Google Research.</div>
              <div className="pt-2 text-right font-sans text-neutral-500 font-medium">
                31st Conference on Neural Information Processing Systems (NIPS 2017), Long Beach, CA, USA.
              </div>
            </div>
          </Flow>
        </Frame>
      </Sheet>
    </div>
  );
};
