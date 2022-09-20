using QCBase
using Documenter

DocMeta.setdocmeta!(QCBase, :DocTestSetup, :(using QCBase); recursive=true)

makedocs(;
    modules=[QCBase],
    authors="Nick Mayhall <nmayhall@vt.edu> and contributors",
    repo="https://github.com/nmayhall-vt/QCBase.jl/blob/{commit}{path}#{line}",
    sitename="QCBase.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://nmayhall-vt.github.io/QCBase.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/nmayhall-vt/QCBase.jl",
    devbranch="main",
)
