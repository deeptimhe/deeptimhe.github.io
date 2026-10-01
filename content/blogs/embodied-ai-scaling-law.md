One of the most consequential ideas large language models have given the tech industry is the scaling law. Yet many people seem to remember only the first word: scaling. Or, put more bluntly, brute force works.

But the *law* is the more important part.

In 2020, Kaplan and his co-authors were not making the abstract claim that bigger models are simply better. They studied how cross-entropy loss follows approximate power-law relationships with model size, dataset size, and training compute under specified experimental conditions. There were independent variables, a dependent variable, a range of validity, and empirically fitted exponents.

Two years later, the Chinchilla paper showed that even the question of *how* to scale cannot be ignored. Under a fixed compute budget, increasing parameter count without providing enough training data is not compute-optimal. Model size and the number of training tokens need to grow in a more balanced way.

That is what the *law* in scaling law is supposed to do. It does not merely endorse scale, it constrains it. It tells us what to increase, under which conditions, and how much predictable improvement to expect. When the conditions change, the relationship must be estimated again.

This does not mean nobody is studying scaling laws in robotics. RT-1’s data ablations suggested that task diversity matters more than simply accumulating additional samples. Open X-Embodiment found positive transfer across robot embodiments, while also documenting cases in which insufficient model capacity led to worse performance in particular domains. Later studies went further, finding that in certain imitation-learning tasks, generalization performance follows an approximate power law with the number of training environments and object categories. Yet once the number of demonstrations per environment passes a certain threshold, adding more demonstrations produces little additional benefit.

These findings do not weaken the case for scaling. They give scaling its missing law: different scaling variables produce different outcomes, and different domains produce different curves.

The problem with many fundraising narratives today is that they skip over these qualifications. A local observation, that scale improves performance under a particular set of conditions, is quietly upgraded into a universal claim that every bottleneck will eventually be solved by more scale.

But what exactly are we scaling?

Model parameters, demonstration trajectories, hours of teleoperation, the number of robots, or the diversity of tasks and environments?
And what exactly are we measuring? Average success rate, long-tail failure rate, continuous operating time, or the cost of human intervention per completed task? If the amount of data increases tenfold, what curve should the improvement follow? If we change the hardware, environment, action space, or data distribution, does the same curve still hold?

Without answers to these questions, “scaling” is not a testable law. It is an invoice that can be rolled over indefinitely.
