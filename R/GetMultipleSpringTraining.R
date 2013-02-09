# Get multiple year spring training
GetMultipleSpringTraining <- function(year) {
  source("GetSpringTraining.R")
  
  # do the list amounts
  resList <- lapply(year, function(x) { GetSpringTraining(x) })

  # map the results back together as a hitters and pitchers
  hitters <- do.call(rbind, lapply(resList, function(x) {x$hitters}))
  pitchers <-do.call(rbind, lapply(resList, function(x) {x$pitchers}))

  # final answer
  list(hitters=hitters, pitchers=pitchers)
}