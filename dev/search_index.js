var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = QCBase","category":"page"},{"location":"#QCBase","page":"Home","title":"QCBase","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for QCBase.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [QCBase]","category":"page"},{"location":"#QCBase.Atom","page":"Home","title":"QCBase.Atom","text":"id::Integer             #index of atom in the molecule\nsymbol::String          #Atomic ID (E.g. H, He, ...)\nxyz::Array{Float64,1}   #list of XYZ coordinates\n\nSimply an Atom\n\n\n\n\n\n","category":"type"},{"location":"#QCBase.MOCluster","page":"Home","title":"QCBase.MOCluster","text":"idx::Int16\norb_list::Vector{Int16}\n\n\n\n\n\n","category":"type"},{"location":"#QCBase.Molecule","page":"Home","title":"QCBase.Molecule","text":"charge::Integer         #overall charge on molecule\nmultiplicity::Integer   #2S+1\natoms::Vector{Atom}     #Vector of `Atoms`\nbasis::String           #Basis set\n\nMolecule essentially as a Vector of atoms, number of electrons and basis set\n\n\n\n\n\n","category":"type"},{"location":"#Base.length-Tuple{MOCluster}","page":"Home","title":"Base.length","text":"length(c::MOCluster)\n\nReturn number of orbitals in MOCluster\n\n\n\n\n\n","category":"method"},{"location":"#QCBase.dim_tot-Tuple{MOCluster, Any, Any}","page":"Home","title":"QCBase.dim_tot","text":"dim_tot(c::MOCluster, na, nb)\n\nReturn dimension of hilbert space spanned by number of orbitals in MOCluster with na and nb number of alpha/beta electrons.\n\n\n\n\n\n","category":"method"},{"location":"#QCBase.dim_tot-Tuple{MOCluster}","page":"Home","title":"QCBase.dim_tot","text":"dim_tot(c::MOCluster)\n\nReturn dimension of hilbert space spanned by number of orbitals in MOCluster.  This is all sectors\n\n\n\n\n\n","category":"method"},{"location":"#QCBase.possible_focksectors-Tuple{MOCluster}","page":"Home","title":"QCBase.possible_focksectors","text":"possible_focksectors(c::MOCluster, delta_elec=nothing)\n\nGet list of possible fock spaces accessible to the MOCluster\n\ndelta_elec::Vector{Int}: (nα, nβ, Δ) restricts fock spaces to: (nα,nβ) ± Δ electron transitions\n\n\n\n\n\n","category":"method"}]
}