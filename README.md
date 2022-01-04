# Towards a Science of Human-AI Decision Making: A Survey of Empirical Studies

[Vivian Lai](https://vivlai.github.io), [Chacha Chen](https://chacha-chen.github.io), [Q. Vera Liao](http://qveraliao.com), [Alison Smith-Renner](https://alisonmsmith.github.io), [Chenhao Tan](https://chenhaot.com)

Read the full survey [here](https://arxiv.org/abs/2112.11471).


## Contribution Guide

### Adding or modifying papers via pull request

**Have a paper you're not seeing here? Want to contribute? Make a pull request (PR)! 😄** 

All data is
in the files `src/data.js`. Please create an entry for the paper and appending the paper into the variable const `data`. 

A valid javascript object for a paper will look like the following:

```
{paper:'Understanding the effect of out-of-distribution examples and interactive explanations on human-ai decision making', 
paper_link:'', 
year:2021, 
venue:'arXiv', 
authors:'Han Liu, Vivian Lai, Chenhao Tan', 
ai_model:'Support-vector machines (SVMs)', ai_assistance_element:'Prediction (binary prediction, multi-class prediction); 
Levels of user agency (interactive explanations)', 
actual_task:'Recidivism prediction; 
Profession prediction; Deception detection', 
ai_task_type:'Discovery', 
task_eval_metric:'Efficacy [objective] (accuracy/error)', 
ai_eval_metric:'Trust and reliance [objective] (agreement/acceptance of model suggestions)', 
key:'liu2021understanding'},
```
The information corresponds to what will be presented in the survey paper. The last key is the latex entry for the paper reference (same as in Google Scholar). If you are not sure of the values for some keys, please leave it blank. We will double check when we merge your pull request.


### Quick contribution via email

"If you want to quickly mention a relevant paper but do not want to go through the hassle of editing the data file, feel free to drop us an at [haidecisionmaking@gmail.com](mailto:haidecisionmaking@gmail.com). We appreciate any construvtive feedback too.