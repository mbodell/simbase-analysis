# Given a year, return a data fram of spring training results
GetSpringTraining <- function(year, league.info = NULL) {
  # Get the league info, if needed
  if(is.null(league.info)) {
    source("GetLeagueInfo.R")
    league.info <- GetLeagueInfo(year)
  }

  # Get the file names we need to grab
  spring.file.names = sprintf("http://simbase.org/year%d/%s_spring.txt", year, league.info$root)

  # Create a list that loads and parses the spring training info into hitters and pitchers
  source("GetSpringTrainingFrameFromFile.R")
  resList <- lapply(spring.file.names, GetSpringTrainingFrameFromFile)

  # create all hitters and pitchers
  hitters <- do.call(rbind, lapply(resList, function(x) {x$hitters}))
  pitchers <- do.call(rbind, lapply(resList, function(x) {x$pitchers}))
 
  list(hitters=hitters, pitchers=pitchers)
}