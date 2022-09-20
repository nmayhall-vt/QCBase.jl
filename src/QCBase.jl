module QCBase

using Printf
using StaticArrays


include("type_Atom.jl")
include("type_Molecule.jl")
include("type_MOCluster.jl")


export Atom
export Molecule
export MOCluster

export n_orb
export dim_tot
export write_xyz 

end
