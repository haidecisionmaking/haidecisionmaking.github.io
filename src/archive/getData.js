import Papa from 'papaparse';

export default function getData() {
    // const data = Papa.parse(fetchCsv());
    var test = `Paper,Latex,Venue,Year,authors,status,if in scope,additional explanations,if in task,if in ai model assistance,if in evaluations,if in experiment design,"explanations(detail)
    find those who do not show predictions ",explanation type/factors,explanation evaluation (detail),explanation evaluation,AI model (detail),AI model,prediction,prediction - detail,information about prediction (local),information about the model (global),studied mental model/user experience/interaction,additional,tags,Research Question,abstract,task group,actual task,dataset type,dataset name,summarized_evaluation_metric,objective,subjective,objective.1,subjective.1,objective.2,sujective,objective.3,subjective.2,objective.4,subjective.3,objective.5,subjective.4,objective.6,subjective.5,objective.7,subjective.6,subject,study design,experiment procedure,duration,sample size,participants type (similar to subject column),platform ,sampling strategy,Study/task time,Compensation,Other,analysis type,performance/results/summary,additional notes/comments
    0,"Are Explanations Helpful? A Comparative Study of the Effects of
    Explanations in AI-Assisted Decision-Making",wang2021explanations,IUI,2021.0,"Xinru Wang, Ming Yin",1,1.0,this paper is clearly on ai-assisted decision making,1.0,1.0,0.0,0.0,"- no explanation (control)
    - feature importance
    - feature contribution
    - nearest neighbors
    - counterfactuals","- global feature importance
    - local feature contribution (coefficient)
    - nearest neighbors
    - counterfactuals (perturbation?)","decision boundary (binary);
    error boundary (prediction == decision);
    trust (likert scale)
    
    1. make an initial independent prediction, 2, review the model prediction (and explanation), and 3. make a final prediction.
    Objective understanding:
    • Compare feature importance: participants were asked to select among a list of features which one was most/least influential on the model’s overall predictions (2 questions)
    • Specify a feature’s marginal effect on predictions: par- ticipants were asked questions like “if the value of feature X of this profile is x2 instead of x1, would it increase or decrease the chance for the model to predict Y ?” (1 question)
    • Counterfactual thinking: participants were given a reference profile, and they were asked to select from a list of changes in feature values the ones that they believed would result in an opposite model prediction (2 questions)
    • Simulate model behavior: participants were given a pro- file, and they were asked to predict what the model would predict on this profile (2 questions)
    • Error detection: participants were given a profile, the model’s prediction on the profile, and the model’s explanation (if ap- plicable), and they were asked to determine whether the model’s prediction was correct (2 questions)
    Subjective understanding:
    by indicating their agreement on the following two statements (adapted from earlier literature [13, 16]) from 1 (“strongly disagree”) to 7 (“strongly agree”): (1) I understand how the model works to predict whether a defendant will reoffend [whether the primary tree species in an area is spruce/fir]; (2) I can predict how the model will behave. The par- ticipant’s subjective understanding of the model is then computed as her average ratings on these two statements. ","decision boundary (binary);
    error boundary (prediction == decision);
    trust (likert scale)",- logistic regression,GAM,yes,single prediction (binary choice),"- feature contribution (local)
    - nearest neighbors
    - counterfactual",- feature importance (global),user makes prediction first then sees ML prediction with opportunity to change their decision,feature-based; example-based,"decision making, empirical studies, explanations effect","RQ1: How do different types of explanation impact people’s understandings of an AI model?
    RQ2: How do different types of explanation influence people’s capability of differentiating a model’s high confidence predictions from the low confidence ones?
    RQ3: How do different types of explanation change people’s ability of calibrating their trust in an AI model?
    ",,"- law & civic (recidivism prediction)
    - others (forest cover prediction)","binary classification
    - recidivism prediction: make a prediction on whether this defendant would reoffend within two years (COMPAS)
    - forest cover prediction: make a prediction on whether this area is primarily  covered by the spruce-fir forest",tabular,"- compas
    - UCI cover type","- a participant’s objective understanding of the ML model, as measured by the number of multiple-choice questions in the exit survey that she answered correctly.
    - the participant’s subjective understanding of the ML model, as measured by her self report in the exit survey.
    - designed a set of 9 MCQs that aim at evaluating participants’ knowledge of the model behavior.
    - report their own perceived understandings of the model by indicating their agreement on the following two statements from 1 (“strongly disagree”) to 7 (“strongly agree”): (1) I understand how the model works to predict whether a defendant will reoffend [whether the primary tree species in an area is spruce/fir]; (2) I can predict how the model will behave. The participant’s subjective understanding of the model is then computed as her average ratings on these two statements.
    - we quantified people’s reliance on the model using the fraction of tasks in which the participant’s final prediction was the same as the model’s prediction (i.e., agreement fraction).
    - we evaluated participants’ capability of calibrating their trust in the ML model using three main dependent variables: appropriate trust, overtrust, understrust.",,,,,,,"understanding of ML model measured by correctly answered MCQ in exit survey (compare feature importance, specify a feature's marginal effect on predictions, counterfactual thinking, simulate model behavior, error detection)",- understanding of the ML model measured by self-reported 9 MCQs on a 7-point likert scale,"- reliance of model measured by agreement fraction
    - capability of calibrating trust measured by appropriate trust, over trust, under trust",,,,,,,,"laypeople (mturk), note that they treat some of them as domain expertise","- between
    - quantitative
    - pilot study
    - practice",,,"782 (recidivism), 561 (forest cover)
    - note that authors did not state how many participants per condition","laypeople (mturk), note that they treat some of them as domain expertise",mturk,"- Within one type of decision making
    task, participants in different treatments worked on the same
    set of 32 task instances, and the model predictions they saw on
    each task were produced by the same logistic regression model that
    we trained using a subset of the original COMPAS or UCI cover
    type dataset.",,"- The base payment of the
    experiment was $1.80 for the recidivism prediction tasks and $2.00 
    for the forest cover prediction tasks
    - if the overall accuracy
    of the participant’s final predictions on the 32 tasks was at least
    60%, she can earn a bonus of $0.03 for each of her correct final
    predictions; and for each correct answer the participant submitted
     to a multiple-choice question about the model behavior in the exit
    survey, she could also earn a $0.10 bonus.",,"pilot, qualitative","- effects of model explanations are dramatically different on tasks where people have varying levels of domain expertise in.
    - feature importance explanations increase people’s objective understanding of an AI model, while feature contribution 
    explanations increase people’s subjective understanding
    of an AI model.
    - feature contribution explanation seems to be able to satisfy more desiderata of AI explanations when people have 
    some domain expertise.
    - examples-based explanations (nearest neighbors & counterfactuals) do noot support trust calibration).","- don't agree with how they select their testbeds
    - the way selected instances shown to participants is questionable
    "
    1,Impossible Explanations? Beyond explainable AI in the GDPR from a COVID-19 use case scenario,hamon2021impossible,Facct,2021.0,"Ronan Hamon, Henrik Junklewitz, Gianclaudio Malgieri, Paul de Hert, Laurent Beslay, Ignacio Sanchez",1,0.0,"- case study, instead of a user study",0.0,0.0,0.0,,"- exant explanations (training data, algorithm process
    - expost explanations (accuracy, confidence)
    - counterfactual example","- exant explanations (training data, algorithm process
    - expost explanations (accuracy, confidence)
    - counterfactual example",-,-,- 2 CNNs,DNN,confidence,,"- probabaility if patient has contracted covid
    - counterfactual example""","- exant explanations (training data, algorithm process
    - expost explanations (accuracy)
    ",,Information about models; example-based,"empirical studies, decision making",to which extent current and future AI systems can provide adequate transparency and satisfactory explanations that would be admissible from a legal point of view.,,medical,- decide if patient has covid,image,- COVID-19 x-ray detection (not available for public),,,,,,,,,- conceptual analysis of explanations,,,,,,,,,patient & experts,case study (no experiments),,,n/a no human experiment,"patients, medical staff",,,,,,,- there is no one-size-fit-all explanation. An explanation type for each context.,- note that these cases are only hypothetical.
    2,Assessing the Local Interpretability of Machine Learning Models,friedler2019assessing,,2019.0,"Dylan Slack, Sorelle Friedler, Carlos Scheidegger, Chitradeep Roy",1,1.0,"- has a user study
    - assesses local interpretability of models and ML models are one of the ingredients in an AI-assisted decision making process",0.0,1.0,0.0,0.0,"- local explanations
    - counterfactual","- model transparency
    - what if explanation (are those counterfactual?)(yeah, i suppose - viv)","Each participant was asked to calculate the output of a machine learning model for a given input, and then to determine the output of a perturbed input applied to the same model.
    - decision boundary (calculation of logistic regression prediction)
    - what if local explainability (calculation of logistic regression prediction)""",decision boundary; counterfactual,"- decision trees
    - logistic regression
    - neural networks",rule-based methods; GAM; NN,no,,-  counterfactual,- model transparency,,feature-based; example-based,interpretable explanations,,"The increasing adoption of machine learning tools has led to calls for accountability via model interpretability. But what does it mean for a machine learning model to be interpretable by humans, and how can this be assessed? We focus on two definitions of interpretability that have been introduced in the machine learning literature: simulatability (a user's ability to run a model on a given input) and ""what if"" local explainability (a user's ability to correctly determine a model's prediction under local changes to the input, given knowledge of the model's original prediction). Through a user study with 1,000 participants, we test whether humans perform well on tasks that mimic the definitions of simulatability and ""what if"" local explainability on models that are typically considered locally interpretable. To track the relative interpretability of models, we employ a simple metric, the runtime operation count on the simulatability task. We find evidence that as the number of operations increases, participant accuracy on the local interpretability tasks decreases. In addition, this evidence is consistent with the common intuition that decision trees and logistic regression models are interpretable and are more interpretable than neural networks.",synthetic & fictional,"- 4 synthetic datasets that each model achieve 100% accuracy
     - 2d dataset w/ rotation around an axis applied
     - 2d w/o rotation around an axis
     - 3d w/ rotation around an axis
     - 5d w/rotation around an axis
    
    Note: as the number of dimensions increases, so does the operation count",tabular,- 4 synthetic datasets created by authors,"- assess local interpretability of respective model by measuring the distribution of correct and incorrect answers on tasks across pairs of model types
    - assess local interpretability of respective models by exploring the relationship between runtime operations, time, and accuracy",,,- time taken on task,,,,"- assessing local interpretability measured by runtime operations, note that the authors also compare the relationship between runtime operations, accuracy (human accuracy on task), and time taken 
    -the main human-understanding measure is simulatability, runtime is a proxy",,,,,,,,,,laypeople,"- between
    - quantitative
    - pilot study",,,1000,laypeople,Prolific,80/20 train-test split,20-30 min,3.5 for completion of a task,,"pilot (qualitative), actual (qualitative)","assessing local intepretability of models
    - decision tress and logistic regression models are locally interpretable, unlike neural networks
     - locally interpretable == sumlatable && ""what if"" locally explainable
    
    assessing relative local intepretability of models
    - decision trees are more locally interpretabe than logistic regression or neural network models on both simutability and ""what if"" local explainability tasks
    
    assessing the relationship b/w runtime operations & accuracy
    - as the number of operations (total number of runtime oeprations counts performed by the model when run on a given input) increases, participant accuracy on the local interpretability tasks decreases",removed intuition by synthetic data
    3,Interpretable Decision Sets: A Joint Framework for Description and Prediction,lakkaraju2016interpretable,KDD,2016.0,"Himabindu Lakkaraju, Stephen H. Bach, Jure Leskovec",1,1.0,"- has a user study
    - related to AI-assisted decision making in the sense that it's exploring how the proposed explanation is interpretable",1.0,1.0,0.0,0.0,"- interpretable decision sets
    - rule-based explanations",- model transparency (decision sets),"understand the model’s decision boundaries by looking at the rules. (multiple choices with groundtruth and descriptive question)
    decision boundary (descriptive question ask the user to describe the decision boundary;
    yes or no question, given rules and label)",decision boundary,"- bayesian decision lists (BDL)
    - CN2
    - classification based on associations (CBA)",rule-based methods,no,,- rule-based explanations,- interpretability by design (interpretable models): decision sets,,rule-based,interpretable explanations,,"One of the most important obstacles to deploying predictive models is the fact that humans do not understand and trust them. Knowing which variables are important in a model’s prediction and how they are combined can be very powerful in helping people understand and trust automatic decision making systems. Here we propose interpretable decision sets, a framework for building predictive models that are highly accurate, yet also highly interpretable. Decision sets are sets of independent if-then rules. Because each rule can be applied independently, decision sets are simple, concise, and easily interpretable. We formalize decision set learning through an objective function that simultaneously optimizes accuracy and interpretability of the rules. In particular, our approach learns short, accurate, and non-overlapping rules that cover the whole feature space and pay attention to small but important classes. Moreover, we prove that our objective is a nonmonotone submodular function, which we efficiently optimize to find a near-optimal set of rules. Experiments show that interpretable decision sets are as accurate at classification as state-of-the-art machine learning techniques. They are also three times smaller on average than rule-based models learned by other methods. Finally, results of a user study show that people are able to answer multiple-choice questions about the decision boundaries of interpretable decision sets and write descriptions of classes based on them faster and more accurately than with other rule-based models that were designed for interpretability. Overall, our framework provides a new approach to interpretable machine learning that balances accuracy, interpretability, and computational efficiency","- law & civic (bail outcome predictions)
    - medical (medical diagnosis)","- bail outcome predictions: each user was asked a series of descriptive and multiple-choice questions based on the rules shown to them.
    - medical diagnosis",free text (description and MCQs),"- bail outcomes (Jordan and Freiburger, 2015)
    - student performance (Lakkaraju et al., 2015)
    - medical diagnosis (Ong et al., 2014)","- human accuracy (fraction of correct answers)
    - average time spent to answer a question
    - number of words used to write a descriptive answer",- human (& AI) accuracy,,- time taken on task,,"- number of words (if user is asked to write feedback by the descriptive evaluation, note that there are two types of evaluation, descriptive and MCQs.",,,,,,,,,,,,students,- between,,,47,students taking a data mining course,university,,,,,qualitative,"- 81% of class descriptions written based on inpteretable decisions sets were accurate
    - average time taken to write a description based on a decision list is thrice as much time taken to write a description based on decision set
    - descriptions based on interpretable decision sets has 74% fewer words
    
    - in the case of multiple choice questions (about decision boundaries of the models), people were more accurate and much faster in answering questions based on our decision sets in comparison with those based on decision lists
    - humans can reason much more accurately about the decision boundaries of a decision set than those of a decision list",
    4,Fairness and Accountability Design Needs for Algorithmic Support in High-Stakes Public Sector Decision-Making,veale2018fairness,CHI,2018.0,"Michael Veale, Max Van Kleek, Reuben Binns",1,1.0,"- has a user study
    - addresses the fairness side of decision-making
    - findings are found via coding on qualitative interviews",0.0,0.0,0.0,0.0,,,,-,,,,,,,,,design practices,,"Calls for heightened consideration of fairness and accountability in algorithmically-informed public decisions---like taxation, justice, and child protection---are now commonplace. How might designers support such human values? We interviewed 27 public sector machine learning practitioners across 5 OECD countries regarding challenges understanding and imbuing public values into their work. The results suggest a disconnect between organisational and institutional realities, constraints and needs, and those addressed by current research into usable, transparent and 'discrimination-aware' machine learning---absences likely to undermine practical initiatives unless addressed. We see design opportunities in this disconnect, such as in supporting the tracking of concept drift in secondary data sources, and in building usable transparency tools to identify risks and incorporate domain knowledge, aimed both at managers and at the 'street-level bureaucrats' on the frontlines of public service. We conclude by outlining ethical challenges and future directions for collaboration in these high-stakes applications.",,- design needs for algorithmic support in high-stakes public sector,other: qual,,- thematic analysis,,,,,,,,,,,"- qualitative interviews, open coding",,,,,,experts,,,,27,predominantly public servants and attached contractors either in modelling or project management,not mentioned,,40-60min,,,"qualitative (17 in-person, 10 telephone)","- disconnect between organisational and instituitional realities
    - currently addressed by research are likely to undermine practical initiatives unless addressed",`
    const data = Papa.parse(test);
    // console.log(data);
    return data;
}

async function fetchCsv() {
    const response = await fetch('test.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    return csv;
}