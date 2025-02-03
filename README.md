# Doubloon Dynamics


**Doubloon Dynamics** is a tool for calculating how High Seas (and other past & future Hack Club programs) projects will match up against each other when voting. Currently it includes 2 tools: a matchup calculator and a table of how matchups work.

## How ELO Works

High Seas stores an [ELO](https://en.wikipedia.org/wiki/Elo_rating_system) (a sort of rating) for every single ship. ELO starts off at 1100, but this increases or decreases due to positive or negative votes. The ELO of the opposing project also counts, for example: if one project has a very high ELO (i.e. it's a good project), and another project beats it, the other project will gain more than if it beat a project with a low ELO.

### ELO Formula

```math
R'_w = R_w + K(1 - \frac{1}{1 + 10^{(R_l - R_w)/400}})
```
```math
R'_l = R_l + K(0 - (1 - \frac{1}{1 + 10^{(R_l - R_w)/400}}))
```

Where $`R_w`$ is the score of the project that won the vote and $`R_l`$ is the score of the project that lost the vote.

## Matchup Calculator

The matchup calculator takes in the ELO of 2 projects and uses the algorithm from High Seas to calculate the *new* ELO of both projects.

![image](https://github.com/user-attachments/assets/b40468d1-02a2-4bda-a174-bd87afb47bb5)

## Rating Change Table

The rating change table shows how the difference in ELO of 2 projects affects the resulting ELO change. Each row on the table represents a difference in ELO, along with a corresponding change in ELO. The winning project *gains* that amount of ELO and the losing project *loses* that amount of ELO.

![image](https://github.com/user-attachments/assets/28d1eed8-24b5-4ae9-8c7b-e36381a354a3)
