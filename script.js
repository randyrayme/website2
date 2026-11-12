document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('form').addEventListener('submit',function(e){e.preventDefault();const d=new FormData(this);const body='Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nInterest: '+d.get('interest')+'\n\n'+d.get('message');location.href='mailto:?subject='+encodeURIComponent('[RandyRay.me] Website Inquiry — '+d.get('interest'))+'&body='+encodeURIComponent(body)})

(function(){const topics={realestate:["What is an inspection contingency, and what happens when issues are found?","How does earnest money work in a purchase offer?","What should a seller prepare before listing a home?","What is the difference between an appraisal and a home inspection?","What closing costs should buyers plan for?","What does an as-is sale really mean?","How does a comparative market analysis help with pricing?"],mortgage:["What is mortgage preapproval, and how is it different from prequalification?","FHA basics: explore down payment and eligibility requirements using HUD's current guidance.","VA loan basics: learn about eligibility and the funding fee from official VA sources.","What is debt-to-income ratio, and why does it matter?","What should you compare on a Loan Estimate?","Fixed versus adjustable rates: what changes over time?","What documents might a lender request before approval?"],credit:["What information appears on your credit report?","How can on-time payments affect credit history?","What is credit utilization, and why monitor balances?","How do you dispute an error on a credit report?","How often should you review your credit reports?","What is the difference between a hard and soft credit inquiry?","Why is a realistic repayment plan important?"]};const d=new Date(),day=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000);Object.keys(topics).forEach(k=>{const el=document.getElementById('daily-'+k);if(el)el.textContent=topics[k][day%topics[k].length]});})();


/* Account for the actual navigation height, including wrapped links on phones. */
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  const sync = () => document.documentElement.style.setProperty('--site-header-height', Math.ceil(header.getBoundingClientRect().height) + 'px');
  sync();
  window.addEventListener('resize', sync, {passive:true});
  if ('ResizeObserver' in window) new ResizeObserver(sync).observe(header);
  window.addEventListener('load', () => {sync(); if (location.hash) { const target = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (target) target.scrollIntoView({block:'start',behavior:'instant'}); }});
})();
