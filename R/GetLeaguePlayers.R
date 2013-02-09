# Given a year (and optional league info for the year) return a dataframe of players, positions, ages, status
GetLeaguePlayers <- function(year, league.info = NULL) {
  # Get the league info, if needed
  if(is.null(league.info)) {
    source("GetLeagueInfo.R")
    league.info <- GetLeagueInfo(year)
  } 

  # Get the file names we need to grab
  root <- c(league.info$root, "waivers")
  roster.file.names = sprintf("http://simbase.org/year%d/%s.ros",year,root)

  # Create a list of rosters (needs work)
  resList <- lapply(roster.file.names, function(x) { read.csv(x, skip=1) })
  res <- do.call(rbind, resList)
}