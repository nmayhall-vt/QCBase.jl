# QCBase

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://nmayhall-vt.github.io/QCBase.jl/stable/)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://nmayhall-vt.github.io/QCBase.jl/dev/)
[![Build Status](https://github.com/nmayhall-vt/QCBase.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/nmayhall-vt/QCBase.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://codecov.io/gh/nmayhall-vt/QCBase.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/nmayhall-vt/QCBase.jl)

Very simply package to provide some general function definitions to be extended by more specific packages as described in the following graph:

```mermaid
graph TD
  QCBase --> InCoreIntegrals
  QCBase --> RDM
  QCBase --> ActiveSpaceSolvers
  QCBase --> ClusterMeanField
  BlockDavidson --> ActiveSpaceSolvers
  InCoreIntegrals --> FermiCG
  RDM --> FermiCG
  QCBase --> FermiCG
  ActiveSpaceSolvers --> FermiCG
  BlockDavidson --> FermiCG
  ActiveSpaceSolvers --> ClusterMeanField
  InCoreIntegrals --> ClusterMeanField
  RDM --> ClusterMeanField
  ```
