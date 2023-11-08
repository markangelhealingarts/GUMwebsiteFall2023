import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';

const headstyle = {
  fontSize: '22px',
  textAlign: 'center',
};
const style4 = { textAlign: 'center' };

const tidbit = ["Whenever one is challenged by something in life, the challenge process itself is creating new neurological pathways and relationships in the brain, and shifting the thought patterns. That process of challenging one's habitual inertia is a large part of what allows real transformation of any kind in a person.", 
"Strong evidence confirms that high amounts of sedentary behavior increase the risk for all-cause mortality including cardiovascular disease and type 2 diabetes. Moderate evidence indicates sedentary behavior is associated with endometrial, colon, and lung cancer. Limited evidence suggests sedentary behavior is associated with other cancer mortality rates and obesity. Strong evidence shows that the hazardous effects of sedentary behavior are more pronounced in physically inactive people (Katzmarzyk, et al., (2019).",
"Over a thirteen week period, workers received a passive prompt every 45 minutes on their computer screen reminding them to stand and engage in non-purposeful activity throughout their workday. After thirteen weeks, the prompt was disabled, and participants were then free to voluntary engage the software. Results demonstrated that when employees were exposed to a passive prompt they were five times more likely to fully adhere to completing a movement break every hour of the workday (Cooley, et al., 2013).",
"The World Health Organization recommends that adults get a minimum of 150 to 300 minutes a week of moderate to vigorous exercise in order to avoid premature death and non-communicable disease (Bull, et al., 2020).",
"In order to successfully persuade people to change, it is necessary to educating them about the dangers of sedentary behavior and teach them self-regulatory techniques. The most effective behavioral activities are ones that are implemented throughout the day, which break up sedentary behavior. Increased activity emerges from those techniques designed to target and reduce sedentary behavior, rather than making the focus on exercise (Gardner, et al., 2016).",
"The stomach, intenstines, and colon are considered 'Yang Organs' in traditional Chinese medicine and are an important part of the body's immune system. It's necessary to consider gut health for your immune system!",
"Self-monitoring, problem solving, and restructuring your social or physical environment are particularly promising change techniques when trying to sit less (Gardner, et al., 2016).",
"Eating sufficient amounts of fiber including fruits and vegetables as well as minimizing the intake of sugars and simple carbohydrates keeps the bacteria in the gut's microbiome happy and healthy enhancing the immune system.",
"Regular exercises scattered throughout the day is more effective then clumping it together like going to the gym. “Prolonged sitting is a risk factor for all-cause mortality, independent of physical activity. Public health programs should focus on reducing sitting time in addition to increasing physical activity levels” (van der Ploeg, et al., 2012).",
"A study based on a cohort of 2635 people 60 years and older found that prolonged sitting time is associated with higher mortality. When compared with people who were consistently sedentary during 2-year period, those who were consistently non-sedentary showed reduced all-cause mortality (León-Muñoz, et al., 2013).",
"“Our sun is just one of the one hundred thousand million stars that make up our galaxy the Milky Way. The Milky Way is only one of the many galaxies in the local group. The local group, in turn, is just one of the thousands of groups and clusters of galaxies which form the largest known structures of our universe.” —Stephen Hawking’s. That is why it is so important for you to Get Up and Move….",
"Psychosocial factors, in particular, depression is independently associated with cardiovascular disease and all-cause mortality, and is often comorbid with chronic diseases that can worsen their associated health outcomes. Regular exercise is thought to be associated with stress reduction and better mood, which may partly mediate associations between depression, stress, and negative health outcomes (Hamer, et al., 2012).",
"A Center for Disease Control and Prevention study compared insufficiently active adults in the United States with active adults (≥150minutes/week moderate-intensity equivalent activity). The study found that 11.1% of aggregate health care expenditures were associated with inadequate physical activity. When adults with any reported difficulty walking due to a health problem were excluded, still an 8.7% of aggregate health care expenditures were associated with inadequate physical activity. This study supports the theory that increasing adults’ physical activity to meet guidelines may reduce U.S. health care expenditures (Carlson, et al., 2015).",
"Eating sufficient amount of fiber such as fruits or vegetables as well as minimizing consuming sugars and carbohydrates keeps the bacteria in the guy's microbiome happy and healthy, enhancing the immune system.",
"There is a prevalence of sedentary behavior among those suffering from mild to severe mental health illness. Research shows that more activity and even mild exercise has been shown to help mitigate the effects of mental illness. Evidence-based exercises like Taiji, Qigong, yoga and other proven movement interventions should be practiced by people to alleviate suffering from a range of mental health conditions (Sharma, et al., 2006).",
"Sitting too long with out moving around is clearly associated with a negative impact on one’s health. The damage caused by sitting is significant and does not change even if you exercise a lot before or after long periods of sitting (Biswas, et al., 2015).",
"Employers should know the dangers of maintaining a sedentary workforce. Substantial evidence shows that encouraging people to stand and move more, and therefore sit less, not only mitigates the damage done by too much sedentary behavior, but increases productivity, and reduces sickness and absenteeism (Buckley, et al., 2015).",
"One of the keys to brain health is the circulation of Cerebral Spinal Fluid (CSF). At night, the CSF absorbs toxins and waste products from around the brain that have built up throughout the day. Then in the morning, as the CSF circulates, the waste produces are flushed back into the blood supply, and fresh CSF brings nutrients back to the brain. Mobilizing the whole spine is critical to that circulation process.",
"Tao is the eternal, ineffable, and original characteristic of beingness that came before existence itself.",
"A sedentary lifestyle is detrimental and contributes to mental health disease. Several well respected studies identify exercises as a viable and optimal intervention to treat and mitigate mental health conditions and disorders (Sharma, et al., 2006).",
"Based on evidence from long-term epidemiological and interventional studies of sedentary workers who were encouraged to stand and move more frequently, desk-based workers should aim to initially progress towards accumulating 2 hrs/day of standing and light activity during working hours, eventually progressing to a total accumulation of 4 h/day (Buckley, et al., 2015).",
"An online survey (distributed in April, 2020), assessed lifestyle changes of 7,753 people across different BMI classifications in response to the global COVID-19 pandemic. It showed that stay-at-home orders have forced abrupt changes to daily routines. The COVID-19 pandemic has produced significant health effects, well beyond the virus itself; and more sedentary behavior is one of many detrimental effects of the pandemic (Flanagan, et al., 2021).",
"Suffering is an attitude. Struggle, on the other hand, is the effort one puts into overcoming a challenge to ones comfort zone. Surrender your suffering in the face of a challenge, and embrace whatever sort of effort you must apply to transform life into a more joyous experience no matter what external circumstances are challenging you.",
"The overarching goal of “Get Up and Move” is to inform people of the dangers of too much sitting and unmitigated screen time. And then, to provide the best possible solution by reminding them to move for a few minutes every half-hour to hour or so. Scientific research overwhelmingly shows that this is the best way to prevent damage caused by sitting.",
"The gastrointestinal tract contains trillions of microbes (collectively known as the gut microbiota) that play essential roles in host physiology and health. The microbiota are a key factor in the immune system. Studies have demonstrated that exercise independently alters the composition and functional capacity of the gut microbiota greatly enhancing its immune function (Mailing, et al., 2019).",
"Qigong practice is known to help reduce stress, enhance the immune system and increase circulation, balance and strength.",
"People who spend long periods of time (more than half an hour at a time) staring at a screen need to be informed about the dangers of eye fatigue and the 20-20-20 rule. The American Academy of Ophthalmology recommends the 20-20-20 rule: Every 20 minutes, shift the eyes to look at an object at least 20 feet away, for at least 20 seconds (hopkinsmedicine.org)."];

function TidbitsBlog() {
  const [isTidbitOpen, setTidbitOpen] = useState(false);
  const [randomTidbit, setRandomTidbit] = useState(null);

  const openTidbitModal = () => {
    const min = 0;
    const max = tidbit.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const selectedTidbit = tidbit[randomIndex];
    setRandomTidbit(selectedTidbit);
    setTidbitOpen(true);
  };

  return (
    <div className='move'>
      <div id='tidbits'>
        <h1 style={headstyle}>Tidbits Blog</h1><br></br>
        <p style={style4}>Click on the button below to learn an interesting fact about Physical Health!!!!!</p>
      </div>

      <div style={style4}><br></br>
        <Button label="Tidbit!" onClick={openTidbitModal} />

        <Modal
          isOpen={isTidbitOpen}
          onRequestClose={() => setTidbitOpen(false)}
          contentLabel="Tidbit"
        >
          <div style={style4}>
            <h1 style={headstyle}>Tidbit!</h1><br></br>
            {randomTidbit && <p >{randomTidbit}</p>}<br></br>
            <Button label="Close" onClick={() => setTidbitOpen(false)} />
          </div>
          
        </Modal>
      </div>
    </div>
  );
}

export default TidbitsBlog;
