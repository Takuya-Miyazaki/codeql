private import codeql.swift.generated.decl.ImportDecl

module Impl {
  class ImportDecl extends Generated::ImportDecl {
    override string toStringImpl() { result = "import ..." }
  }
}
