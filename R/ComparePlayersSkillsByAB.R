# Compare two groups on a skill
# Designed generically, but likely only works for filter.skill of Age
# Sample: to see how many spring training BB the players added through 
# aging from 20 to 22 we might try:
# ComparePlayersSkillsByAB(spring.20t27$hitters,"Age",20,22,"BB")
ComparePlayersSkillsByAB <- function(players, filter.skill, a, b, compare.skill) {
  population <- players[players[[filter.skill]]==a | players[[filter.skill]]==b,]
  ids <- unique(population$ID)
  diff <- sapply(ids, function(x) {
    player <- population[population$ID==x,]
    if(nrow(player)==2) {
      player[player[[filter.skill]]==b,][[compare.skill]] - player[player[[filter.skill]]==a,][[compare.skill]]
    } else {
      NA
    }
  })
  diff <- diff[!is.na(diff)]
  print(summary(diff))
  diff
}
  
